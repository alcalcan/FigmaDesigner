import { BaseComponent, ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { Main_Navigation_28 } from "../../components/UEFA_web/Main_Navigation_28/Main_Navigation_28";
import { SponsorBanner } from "../../components/UEFA_web/SponsorBanner/SponsorBanner";

/**
 * Header_Sponsor_Banner_Demo
 * 
 * Showcase the Header + Sponsor Banner combinations:
 * - 12 Variants total covering Standard, Double Line, and Large layouts
 * - Styles for each: Just Text, Border Only, and 25% Fill
 */
export class Header_Sponsor_Banner_Demo extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const message = "Unlock huge savings – up to 15% with Genius";
        const mobileMessage = "Unlock savings";
        const doubleMessage = "Unlock huge savings\nup to 15% with Genius";

        const children: NodeDefinition[] = [
            // --- DESKTOP STANDARD ---
            // V1: Just Text
            {
                "type": "TEXT", "name": "V1_BannerStrip_Label",
                "props": { "characters": "V1: Desktop Just Text", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME", "name": "V1_BannerStrip_Combination_Desktop",
                "props": { "layoutMode": "VERTICAL", "itemSpacing": 0, "fills": [], "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED" },
                "layoutProps": { "width": 1680, "parentIsAutoLayout": true },
                "children": [
                    { "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28, "props": { "platform": "desktop" }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } },
                    { "type": "COMPONENT", "name": "V1_SponsorBanner_Desktop_JustText", "component": SponsorBanner, "props": { "platform": "desktop", "message": message, "borderOpacity": 0, "fillOpacity": 0 }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } }
                ]
            },

            // V2: Border Only
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT", "name": "V2_BannerStrip_Label",
                "props": { "characters": "V2: Desktop Bordered (Standard)", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME", "name": "V2_BannerStrip_Combination_Desktop",
                "props": { "layoutMode": "VERTICAL", "itemSpacing": 0, "fills": [], "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED" },
                "layoutProps": { "width": 1680, "parentIsAutoLayout": true },
                "children": [
                    { "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28, "props": { "platform": "desktop" }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } },
                    { "type": "COMPONENT", "name": "V2_SponsorBanner_Desktop_Bordered", "component": SponsorBanner, "props": { "platform": "desktop", "message": message, "fillOpacity": 0 }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } }
                ]
            },

            // V3: 25% Fill
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT", "name": "V3_BannerStrip_Label",
                "props": { "characters": "V3: Desktop + 25% Fill", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME", "name": "V3_BannerStrip_Combination_Desktop",
                "props": { "layoutMode": "VERTICAL", "itemSpacing": 0, "fills": [], "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED" },
                "layoutProps": { "width": 1680, "parentIsAutoLayout": true },
                "children": [
                    { "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28, "props": { "platform": "desktop" }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } },
                    { "type": "COMPONENT", "name": "V3_SponsorBanner_Desktop_Filled", "component": SponsorBanner, "props": { "platform": "desktop", "message": message, "fillOpacity": 0.25 }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } }
                ]
            },

            // --- MOBILE STANDARD ---
            // V4: Just Text
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT", "name": "V4_BannerStrip_Label",
                "props": { "characters": "V4: Mobile Just Text", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME", "name": "V4_BannerStrip_Combination_Mobile",
                "props": { "layoutMode": "VERTICAL", "itemSpacing": 0, "fills": [], "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED" },
                "layoutProps": { "width": 375, "parentIsAutoLayout": true },
                "children": [
                    { "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28, "props": { "platform": "mobile" }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } },
                    { "type": "COMPONENT", "name": "V4_SponsorBanner_Mobile_JustText", "component": SponsorBanner, "props": { "platform": "mobile", "message": mobileMessage, "borderOpacity": 0, "fillOpacity": 0 }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } }
                ]
            },

            // V5: Border Only
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT", "name": "V5_BannerStrip_Label",
                "props": { "characters": "V5: Mobile Bordered", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME", "name": "V5_BannerStrip_Combination_Mobile",
                "props": { "layoutMode": "VERTICAL", "itemSpacing": 0, "fills": [], "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED" },
                "layoutProps": { "width": 375, "parentIsAutoLayout": true },
                "children": [
                    { "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28, "props": { "platform": "mobile" }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } },
                    { "type": "COMPONENT", "name": "V5_SponsorBanner_Mobile_Bordered", "component": SponsorBanner, "props": { "platform": "mobile", "message": mobileMessage, "fillOpacity": 0 }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } }
                ]
            },

            // V6: 25% Fill
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT", "name": "V6_BannerStrip_Label",
                "props": { "characters": "V6: Mobile + 25% Fill", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME", "name": "V6_BannerStrip_Combination_Mobile",
                "props": { "layoutMode": "VERTICAL", "itemSpacing": 0, "fills": [], "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED" },
                "layoutProps": { "width": 375, "parentIsAutoLayout": true },
                "children": [
                    { "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28, "props": { "platform": "mobile" }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } },
                    { "type": "COMPONENT", "name": "V6_SponsorBanner_Mobile_Filled", "component": SponsorBanner, "props": { "platform": "mobile", "message": mobileMessage, "fillOpacity": 0.25 }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } }
                ]
            },

            // --- DOUBLE LINE ---
            // V7: Double Line Just Text
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT", "name": "V7_BannerStrip_Label",
                "props": { "characters": "V7: Double Line Just Text", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME", "name": "V7_BannerStrip_Combination_Desktop",
                "props": { "layoutMode": "VERTICAL", "itemSpacing": 0, "fills": [], "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED" },
                "layoutProps": { "width": 1680, "parentIsAutoLayout": true },
                "children": [
                    { "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28, "props": { "platform": "desktop" }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } },
                    { "type": "COMPONENT", "name": "V7_SponsorBanner_Double_JustText", "component": SponsorBanner, "props": { "platform": "desktop", "variant": "double", "message": doubleMessage, "borderOpacity": 0, "fillOpacity": 0 }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } }
                ]
            },

            // V8: Double Line Border Only
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT", "name": "V8_BannerStrip_Label",
                "props": { "characters": "V8: Double Line Bordered", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME", "name": "V8_BannerStrip_Combination_Desktop",
                "props": { "layoutMode": "VERTICAL", "itemSpacing": 0, "fills": [], "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED" },
                "layoutProps": { "width": 1680, "parentIsAutoLayout": true },
                "children": [
                    { "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28, "props": { "platform": "desktop" }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } },
                    { "type": "COMPONENT", "name": "V8_SponsorBanner_Double_Bordered", "component": SponsorBanner, "props": { "platform": "desktop", "variant": "double", "message": doubleMessage, "fillOpacity": 0 }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } }
                ]
            },

            // V9: Double Line 25% Fill
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT", "name": "V9_BannerStrip_Label",
                "props": { "characters": "V9: Double Line + 25% Fill", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME", "name": "V9_BannerStrip_Combination_Desktop",
                "props": { "layoutMode": "VERTICAL", "itemSpacing": 0, "fills": [], "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED" },
                "layoutProps": { "width": 1680, "parentIsAutoLayout": true },
                "children": [
                    { "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28, "props": { "platform": "desktop" }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } },
                    { "type": "COMPONENT", "name": "V9_SponsorBanner_Double_Filled", "component": SponsorBanner, "props": { "platform": "desktop", "variant": "double", "message": doubleMessage, "fillOpacity": 0.25 }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } }
                ]
            },

            // --- LARGE ---
            // V10: Large Just Text
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT", "name": "V10_BannerStrip_Label",
                "props": { "characters": "V10: Large Just Text", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME", "name": "V10_BannerStrip_Combination_Desktop",
                "props": { "layoutMode": "VERTICAL", "itemSpacing": 0, "fills": [], "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED" },
                "layoutProps": { "width": 1680, "parentIsAutoLayout": true },
                "children": [
                    { "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28, "props": { "platform": "desktop" }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } },
                    { "type": "COMPONENT", "name": "V10_SponsorBanner_Large_JustText", "component": SponsorBanner, "props": { "platform": "desktop", "variant": "large", "message": message, "borderOpacity": 0, "fillOpacity": 0 }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } }
                ]
            },

            // V11: Large Border Only
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT", "name": "V11_BannerStrip_Label",
                "props": { "characters": "V11: Large Bordered", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME", "name": "V11_BannerStrip_Combination_Desktop",
                "props": { "layoutMode": "VERTICAL", "itemSpacing": 0, "fills": [], "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED" },
                "layoutProps": { "width": 1680, "parentIsAutoLayout": true },
                "children": [
                    { "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28, "props": { "platform": "desktop" }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } },
                    { "type": "COMPONENT", "name": "V11_SponsorBanner_Large_Bordered", "component": SponsorBanner, "props": { "platform": "desktop", "variant": "large", "message": message, "fillOpacity": 0 }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } }
                ]
            },

            // V12: Large 25% Fill
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT", "name": "V12_BannerStrip_Label",
                "props": { "characters": "V12: Large + 25% Fill", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME", "name": "V12_BannerStrip_Combination_Desktop",
                "props": { "layoutMode": "VERTICAL", "itemSpacing": 0, "fills": [], "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED" },
                "layoutProps": { "width": 1680, "parentIsAutoLayout": true },
                "children": [
                    { "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28, "props": { "platform": "desktop" }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } },
                    { "type": "COMPONENT", "name": "V12_SponsorBanner_Large_Filled", "component": SponsorBanner, "props": { "platform": "desktop", "variant": "large", "message": message, "fillOpacity": 0.25 }, "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" } }
                ]
            },
        ];

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Header_Sponsor_Banner_Demo",
            "props": {
                "layoutMode": "VERTICAL",
                "itemSpacing": 20,
                "paddingTop": 40,
                "paddingRight": 40,
                "paddingBottom": 40,
                "paddingLeft": 40,
                "fills": [{ "type": "SOLID", "color": { "r": 0.95, "g": 0.95, "b": 0.95 } }]
            },
            "layoutProps": { "width": 1800, "height": 4500, "parentIsAutoLayout": false },
            "children": children
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

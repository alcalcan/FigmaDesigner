import { BaseComponent, ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { Main_Navigation_28 } from "../../components/UEFA_Booking_Euro28/Main_Navigation_28/Main_Navigation_28";
import { SponsorStrip, SponsorStripProps } from "../../components/UEFA_Booking_Euro28/SponsorStrip/SponsorStrip";

interface HeaderCombination {
    title: string;
    platform: 'desktop' | 'mobile';
    stripProps: Partial<SponsorStripProps>;
}

export class Header_SponsorStrip_Combinations extends BaseComponent {

    async create(props: ComponentProps): Promise<SceneNode> {
        const CANVAS_WIDTH = 1680;
        const desktopMessage = "Unlock huge savings – up to 15% with Genius";
        const mobileMessage = "Unlock savings";

        const combinations: HeaderCombination[] = [
            // --- DARK BLUE SET ---
            {
                title: "V25: Desktop - Center - Logo Only",
                platform: 'desktop',
                stripProps: { stripBackground: 'dark-blue', pillAlignment: 'center', message: undefined, showMarketingIcon: false }
            },
            {
                title: "V26: Desktop - Center - Msg + Icon",
                platform: 'desktop',
                stripProps: { stripBackground: 'dark-blue', pillAlignment: 'center', message: desktopMessage, showMarketingIcon: true }
            },
            {
                title: "V27: Desktop - Center - Filled Pill",
                platform: 'desktop',
                stripProps: { stripBackground: 'dark-blue', pillAlignment: 'center', message: desktopMessage, showMarketingIcon: true, showFilledContainer: true }
            },
            {
                title: "V30: Desktop - Center - Solid Blue Pill",
                platform: 'desktop',
                stripProps: { stripBackground: 'dark-blue', pillAlignment: 'center', message: desktopMessage, showMarketingIcon: true, showSolidBlueContainer: true }
            },
            {
                title: "V31: Desktop - Right - Logo Only",
                platform: 'desktop',
                stripProps: { stripBackground: 'dark-blue', pillAlignment: 'right', message: undefined, showMarketingIcon: false }
            },
            {
                title: "V34: Desktop - Right - Bordered Pill",
                platform: 'desktop',
                stripProps: { stripBackground: 'dark-blue', pillAlignment: 'right', message: desktopMessage, showMarketingIcon: true, showBorderedContainer: true }
            },
            {
                title: "V36: Desktop - Right - Solid Blue Pill",
                platform: 'desktop',
                stripProps: { stripBackground: 'dark-blue', pillAlignment: 'right', message: desktopMessage, showMarketingIcon: true, showSolidBlueContainer: true }
            },
            {
                title: "V37: Mobile - Center - Logo Only",
                platform: 'mobile',
                stripProps: { stripBackground: 'dark-blue', pillAlignment: 'center', message: undefined, showMarketingIcon: false }
            },

            // --- LIGHT BLUE SET ---
            {
                title: "V50: Desktop - Center - Msg + Icon",
                platform: 'desktop',
                stripProps: { stripBackground: 'light-blue', pillAlignment: 'center', message: desktopMessage, showMarketingIcon: true }
            },
            {
                title: "V52: Desktop - Center - Bordered Pill",
                platform: 'desktop',
                stripProps: { stripBackground: 'light-blue', pillAlignment: 'center', message: desktopMessage, showMarketingIcon: true, showBorderedContainer: true }
            },
            {
                title: "V55: Desktop - Right - Logo Only",
                platform: 'desktop',
                stripProps: { stripBackground: 'light-blue', pillAlignment: 'right', message: undefined, showMarketingIcon: false }
            },
            {
                title: "V56: Desktop - Right - Msg + Icon",
                platform: 'desktop',
                stripProps: { stripBackground: 'light-blue', pillAlignment: 'right', message: desktopMessage, showMarketingIcon: true }
            },
            {
                title: "V58: Desktop - Right - Bordered Pill",
                platform: 'desktop',
                stripProps: { stripBackground: 'light-blue', pillAlignment: 'right', message: desktopMessage, showMarketingIcon: true, showBorderedContainer: true }
            },
            {
                title: "V61: Mobile - Center - Logo Only",
                platform: 'mobile',
                stripProps: { stripBackground: 'light-blue', pillAlignment: 'center', message: undefined, showMarketingIcon: false }
            },
            {
                title: "V68: Mobile - Right - Msg + Icon",
                platform: 'mobile',
                stripProps: { stripBackground: 'light-blue', pillAlignment: 'right', message: mobileMessage, showMarketingIcon: true }
            },
            {
                title: "V69: Mobile - Center - Msg + Icon",
                platform: 'mobile',
                stripProps: { stripBackground: 'light-blue', pillAlignment: 'center', message: mobileMessage, showMarketingIcon: true }
            },

            // --- BOOKING GRADIENT SET ---
            {
                title: "V75: Desktop - Center - Msg + Icon",
                platform: 'desktop',
                stripProps: { stripBackground: 'booking-gradient', pillAlignment: 'center', message: desktopMessage, showMarketingIcon: true }
            },
            {
                title: "V80: Desktop - Right - Msg + Icon",
                platform: 'desktop',
                stripProps: { stripBackground: 'booking-gradient', pillAlignment: 'right', message: desktopMessage, showMarketingIcon: true }
            },
            {
                title: "V85: Mobile - Center - Logo Only",
                platform: 'mobile',
                stripProps: { stripBackground: 'booking-gradient', pillAlignment: 'center', message: undefined, showMarketingIcon: false }
            },
            {
                title: "V86: Mobile - Center - Msg + Icon",
                platform: 'mobile',
                stripProps: { stripBackground: 'booking-gradient', pillAlignment: 'center', message: mobileMessage, showMarketingIcon: true }
            }
        ];

        const renderCombination = (combo: HeaderCombination) => {
            const isMobile = combo.platform === 'mobile';
            const itemWidth = isMobile ? 375 : CANVAS_WIDTH;

            return {
                "type": "FRAME" as const,
                "name": `Variant Item - ${combo.title}`,
                "props": {
                    "layoutMode": "VERTICAL" as const,
                    "itemSpacing": 8,
                    "primaryAxisSizingMode": "AUTO" as const,
                    "counterAxisSizingMode": "FIXED" as const,
                    "fills": []
                },
                "layoutProps": { "parentIsAutoLayout": true, "width": itemWidth },
                "children": [
                    {
                        "type": "TEXT" as const,
                        "props": { "characters": combo.title, "fontSize": 14, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
                        "layoutProps": { "parentIsAutoLayout": true }
                    },
                    {
                        "type": "FRAME" as const,
                        "name": combo.title,
                        "props": {
                            "layoutMode": "VERTICAL" as const,
                            "itemSpacing": 0,
                            "primaryAxisSizingMode": "AUTO" as const,
                            "counterAxisSizingMode": "FIXED" as const,
                            "fills": []
                        },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" as const },
                        "children": [
                            {
                                "type": "COMPONENT" as const,
                                "name": "UEFA Nav",
                                "component": Main_Navigation_28,
                                "props": { platform: combo.platform },
                                "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" as const }
                            },
                            {
                                "type": "COMPONENT" as const,
                                "name": "Sponsor Strip",
                                "component": SponsorStrip,
                                "props": { platform: combo.platform, ...combo.stripProps },
                                "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" as const }
                            }
                        ]
                    }
                ]
            };
        };

        const darkBlueCombos = combinations.filter(c => c.stripProps.stripBackground === 'dark-blue');
        const lightBlueCombos = combinations.filter(c => c.stripProps.stripBackground === 'light-blue');
        const bookingGradientCombos = combinations.filter(c => c.stripProps.stripBackground === 'booking-gradient');

        const children: NodeDefinition[] = [
            {
                "type": "TEXT",
                "props": { "characters": "Header & Sponsor Strip Combinations", "fontSize": 48, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "TEXT",
                "props": { "characters": "Complete set of curated strips combined with UEFA Navigation (0px gap).", "fontSize": 18, "font": { "family": "Inter", "style": "Regular" }, "fills": [{ "type": "SOLID", "color": { "r": 0.4, "g": 0.4, "b": 0.4 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },

            // --- DARK BLUE SET ---
            {
                "type": "TEXT",
                "props": { "characters": "Dark Blue Set", "fontSize": 32, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }], "paddingTop": 40 },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            ...darkBlueCombos.filter(c => c.platform === 'desktop').map(renderCombination),
            {
                "type": "FRAME",
                "name": "Mobile Row - Dark Blue",
                "props": { "layoutMode": "HORIZONTAL", "itemSpacing": 40, "fills": [], "counterAxisSizingMode": "AUTO" },
                "layoutProps": { "parentIsAutoLayout": true },
                "children": darkBlueCombos.filter(c => c.platform === 'mobile').map(renderCombination)
            },

            // --- LIGHT BLUE SET ---
            {
                "type": "TEXT",
                "props": { "characters": "Light Blue Set", "fontSize": 32, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }], "paddingTop": 60 },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            ...lightBlueCombos.filter(c => c.platform === 'desktop').map(renderCombination),
            {
                "type": "FRAME",
                "name": "Mobile Row - Light Blue",
                "props": { "layoutMode": "HORIZONTAL", "itemSpacing": 40, "fills": [], "counterAxisSizingMode": "AUTO" },
                "layoutProps": { "parentIsAutoLayout": true },
                "children": lightBlueCombos.filter(c => c.platform === 'mobile').map(renderCombination)
            },

            // --- BOOKING GRADIENT SET ---
            {
                "type": "TEXT",
                "props": { "characters": "Booking Gradient Set", "fontSize": 32, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }], "paddingTop": 60 },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            ...bookingGradientCombos.filter(c => c.platform === 'desktop').map(renderCombination),
            {
                "type": "FRAME",
                "name": "Mobile Row - Booking Gradient",
                "props": { "layoutMode": "HORIZONTAL", "itemSpacing": 40, "fills": [], "counterAxisSizingMode": "AUTO" },
                "layoutProps": { "parentIsAutoLayout": true },
                "children": bookingGradientCombos.filter(c => c.platform === 'mobile').map(renderCombination)
            }
        ];

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Header_SponsorStrip_Combinations",
            "props": {
                "layoutMode": "VERTICAL",
                "itemSpacing": 40,
                "paddingTop": 64, "paddingRight": 64, "paddingBottom": 64, "paddingLeft": 64,
                "fills": [{ "type": "SOLID", "color": { "r": 0.96, "g": 0.96, "b": 0.96 } }]
            },
            "layoutProps": { "width": CANVAS_WIDTH + 128, "parentIsAutoLayout": true },
            "children": children
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { SponsorStrip, SponsorStripProps } from "../../components/Alex_CookBook/SponsorStrip/SponsorStrip";

interface VariantDefinition {
    title: string;
    props: Partial<SponsorStripProps>;
    note: string;
}

export class SponsorStripDemo_Curated extends BaseComponent {

    async create(props: ComponentProps): Promise<SceneNode> {
        const CANVAS_WIDTH = 1672;
        const message = "Unlock huge savings – up to 15% with Genius";

        const darkBlueVariants: VariantDefinition[] = [
            { title: "V25: Desktop - Center - Logo Only", props: { platform: "desktop", stripBackground: 'dark-blue', pillAlignment: 'center', message: undefined, showMarketingIcon: false }, note: "Dark Blue - Center - Logo Only" },
            { title: "V26: Desktop - Center - Msg + Icon", props: { platform: "desktop", stripBackground: 'dark-blue', pillAlignment: 'center', message: message, showMarketingIcon: true }, note: "Dark Blue - Center - Msg + Icon" },
            { title: "V27: Desktop - Center - Filled Pill", props: { platform: "desktop", stripBackground: 'dark-blue', pillAlignment: 'center', message: message, showMarketingIcon: true, showFilledContainer: true }, note: "Dark Blue - Center - Filled Pill" },
            { title: "V30: Desktop - Center - Solid Blue Pill", props: { platform: "desktop", stripBackground: 'dark-blue', pillAlignment: 'center', message: message, showMarketingIcon: true, showSolidBlueContainer: true }, note: "Dark Blue - Center - Solid Blue Pill" },
            { title: "V31: Desktop - Right - Logo Only", props: { platform: "desktop", stripBackground: 'dark-blue', pillAlignment: 'right', message: undefined, showMarketingIcon: false }, note: "Dark Blue - Right - Logo Only" },
            { title: "V34: Desktop - Right - Bordered Pill", props: { platform: "desktop", stripBackground: 'dark-blue', pillAlignment: 'right', message: message, showMarketingIcon: true, showBorderedContainer: true }, note: "Dark Blue - Right - Bordered Pill" },
            { title: "V36: Desktop - Right - Solid Blue Pill", props: { platform: "desktop", stripBackground: 'dark-blue', pillAlignment: 'right', message: message, showMarketingIcon: true, showSolidBlueContainer: true }, note: "Dark Blue - Right - Solid Blue Pill" },
            { title: "V37: Mobile - Center - Logo Only", props: { platform: "mobile", stripBackground: 'dark-blue', pillAlignment: 'center', message: undefined, showMarketingIcon: false }, note: "Dark Blue - Center - Logo Only" },
        ];

        const lightBlueVariants: VariantDefinition[] = [
            { title: "V50: Desktop - Center - Msg + Icon", props: { platform: "desktop", stripBackground: 'light-blue', pillAlignment: 'center', message: message, showMarketingIcon: true }, note: "Light Blue - Center - Msg + Icon" },
            { title: "V52: Desktop - Center - Bordered Pill", props: { platform: "desktop", stripBackground: 'light-blue', pillAlignment: 'center', message: message, showMarketingIcon: true, showBorderedContainer: true }, note: "Light Blue - Center - Bordered Pill" },
            { title: "V55: Desktop - Right - Logo Only", props: { platform: "desktop", stripBackground: 'light-blue', pillAlignment: 'right', message: undefined, showMarketingIcon: false }, note: "Light Blue - Right - Logo Only" },
            { title: "V56: Desktop - Right - Msg + Icon", props: { platform: "desktop", stripBackground: 'light-blue', pillAlignment: 'right', message: message, showMarketingIcon: true }, note: "Light Blue - Right - Msg + Icon" },
            { title: "V58: Desktop - Right - Bordered Pill", props: { platform: "desktop", stripBackground: 'light-blue', pillAlignment: 'right', message: message, showMarketingIcon: true, showBorderedContainer: true }, note: "Light Blue - Right - Bordered Pill" },
            { title: "V61: Mobile - Center - Logo Only", props: { platform: "mobile", stripBackground: 'light-blue', pillAlignment: 'center', message: undefined, showMarketingIcon: false }, note: "Light Blue - Center - Logo Only" },
            { title: "V68: Mobile - Right - Msg + Icon", props: { platform: "mobile", stripBackground: 'light-blue', pillAlignment: 'right', message: "Unlock savings", showMarketingIcon: true }, note: "Light Blue - Right - Msg + Icon" },
            { title: "V69: Mobile - Center - Msg + Icon", props: { platform: "mobile", stripBackground: 'light-blue', pillAlignment: 'center', message: "Unlock savings", showMarketingIcon: true }, note: "Light Blue - Center - Msg + Icon" },
        ];

        const bookingGradientVariants: VariantDefinition[] = [
            { title: "V75: Desktop - Center - Msg + Icon", props: { platform: "desktop", stripBackground: 'booking-gradient', pillAlignment: 'center', message: message, showMarketingIcon: true }, note: "Booking Gradient - Center - Msg + Icon" },
            { title: "V80: Desktop - Right - Msg + Icon", props: { platform: "desktop", stripBackground: 'booking-gradient', pillAlignment: 'right', message: message, showMarketingIcon: true }, note: "Booking Gradient - Right - Msg + Icon" },
            { title: "V85: Mobile - Center - Logo Only", props: { platform: "mobile", stripBackground: 'booking-gradient', pillAlignment: 'center', message: undefined, showMarketingIcon: false }, note: "Booking Gradient - Center - Logo Only" },
            { title: "V86: Mobile - Center - Msg + Icon", props: { platform: "mobile", stripBackground: 'booking-gradient', pillAlignment: 'center', message: "Unlock savings", showMarketingIcon: true }, note: "Booking Gradient - Center - Msg + Icon" },
        ];

        const renderGrid = (variants: VariantDefinition[], columns: number, itemWidth: number) => {
            const isHorizontal = columns > 1;
            const rows: NodeDefinition[] = [];
            for (let i = 0; i < variants.length; i += columns) {
                const chunk = variants.slice(i, i + columns);
                rows.push({
                    "type": "FRAME", "name": "Row",
                    "props": {
                        "layoutMode": isHorizontal ? "HORIZONTAL" : "VERTICAL",
                        "itemSpacing": 32,
                        "primaryAxisSizingMode": isHorizontal ? "FIXED" : "AUTO",
                        "counterAxisSizingMode": isHorizontal ? "AUTO" : "FIXED",
                        "primaryAxisAlignItems": "MIN",
                        "counterAxisAlignItems": "MIN",
                        "fills": []
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" },
                    "children": chunk.map(v => ({
                        "type": "FRAME", "name": "Variant Item",
                        "props": { "layoutMode": "VERTICAL", "itemSpacing": 8, "fills": [] },
                        "layoutProps": { "parentIsAutoLayout": true, "width": itemWidth },
                        "children": [
                            {
                                "type": "TEXT",
                                "props": { "characters": v.title, "fontSize": 14, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
                                "layoutProps": { "parentIsAutoLayout": true }
                            },
                            {
                                "type": "COMPONENT", "name": v.title, "component": SponsorStrip,
                                "props": { ...v.props, name: v.title },
                                "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": itemWidth }
                            }
                        ]
                    }))
                });
            }
            return rows;
        };

        const children: NodeDefinition[] = [
            {
                "type": "TEXT",
                "props": { "characters": "Curated Sponsor Strip Selection", "fontSize": 48, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "TEXT",
                "props": { "characters": "Dark Blue Background Set", "fontSize": 32, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }], "paddingTop": 40 },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            ...renderGrid(darkBlueVariants.filter(v => v.props.platform === "desktop"), 1, CANVAS_WIDTH),
            ...renderGrid(darkBlueVariants.filter(v => v.props.platform === "mobile"), 1, 375),
            {
                "type": "TEXT",
                "props": { "characters": "Light Blue Background Set", "fontSize": 32, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }], "paddingTop": 60 },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            ...renderGrid(lightBlueVariants.filter(v => v.props.platform === "desktop"), 1, CANVAS_WIDTH),
            ...renderGrid(lightBlueVariants.filter(v => v.props.platform === "mobile"), 1, 375),
            {
                "type": "TEXT",
                "props": { "characters": "Booking Gradient Background Set", "fontSize": 32, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }], "paddingTop": 60 },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            ...renderGrid(bookingGradientVariants.filter(v => v.props.platform === "desktop"), 1, CANVAS_WIDTH),
            ...renderGrid(bookingGradientVariants.filter(v => v.props.platform === "mobile"), 1, 375)
        ];

        const structure: NodeDefinition = {
            "type": "FRAME", "name": "SponsorStripDemo_Curated",
            "props": {
                "layoutMode": "VERTICAL", "itemSpacing": 40,
                "paddingTop": 64, "paddingRight": 64, "paddingBottom": 64, "paddingLeft": 64,
                "fills": [{ "type": "SOLID", "color": { "r": 0.96, "g": 0.96, "b": 0.96 } }]
            },
            "layoutProps": { "width": CANVAS_WIDTH + 128, "parentIsAutoLayout": true },
            "children": children
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0; root.y = props.y ?? 0;
        return root;
    }
}

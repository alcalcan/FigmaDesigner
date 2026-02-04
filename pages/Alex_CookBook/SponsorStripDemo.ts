import { BaseComponent, ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { SponsorStrip, SponsorStripProps } from "../../components/Alex_CookBook/SponsorStrip/SponsorStrip";

interface VariantDefinition {
    title: string;
    props: Partial<SponsorStripProps>;
    note: string;
}

export class SponsorStripDemo extends BaseComponent {

    async create(props: ComponentProps): Promise<SceneNode> {
        let variantCounter = 1;
        const CANVAS_WIDTH = 1672;

        const message = "Unlock huge savings – up to 15% with Genius";

        const backgroundStyles: { name: string, variant: SponsorStripProps['stripBackground'] }[] = [
            { name: "Euro Blue", variant: 'euro-blue' },
            { name: "Dark Blue", variant: 'dark-blue' },
            { name: "Light Blue", variant: 'light-blue' },
            { name: "Blue Gradient", variant: 'blue-gradient' },
            { name: "Booking Light Blue", variant: 'booking-light-blue' },
            { name: "Booking Gradient", variant: 'booking-gradient' }
        ];

        const pillStyles = [
            { name: "Logo Only", props: { message: undefined, showMarketingIcon: false } },
            { name: "Msg + Icon", props: { message: message, showMarketingIcon: true } },
            { name: "Filled Pill", props: { message: message, showMarketingIcon: true, showFilledContainer: true } },
            { name: "Bordered Pill", props: { message: message, showMarketingIcon: true, showBorderedContainer: true } },
            { name: "Grad Pill", props: { message: message, showMarketingIcon: true, showGradientContainer: true } },
            { name: "Solid Blue Pill", props: { message: message, showMarketingIcon: true, showSolidBlueContainer: true } },
        ];

        const generateSection = (platform: 'desktop' | 'mobile', bg: SponsorStripProps['stripBackground']) => {
            const variants: VariantDefinition[] = [];
            const layouts: ('center' | 'right')[] = ['center', 'right'];

            layouts.forEach(layout => {
                pillStyles.forEach(p => {
                    variants.push({
                        title: `V${variantCounter++}_${platform.charAt(0).toUpperCase()}_${bg?.toUpperCase()}_${layout.toUpperCase()}_${p.name.replace(/\s+/g, '')}`,
                        props: {
                            platform: platform,
                            pillAlignment: layout,
                            stripBackground: bg,
                            ...p.props
                        },
                        note: `${bg} Background - ${layout} - ${p.name}`
                    });
                });
            });
            return variants;
        };

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
                "props": { "characters": "Refined Sponsor Strip (Simplified Navigation)", "fontSize": 48, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            }
        ];

        backgroundStyles.forEach(bg => {
            children.push({
                "type": "TEXT",
                "props": { "characters": `${bg.name} Background`, "fontSize": 32, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }], "paddingTop": 40 },
                "layoutProps": { "parentIsAutoLayout": true }
            });

            const desktopVars = generateSection('desktop', bg.variant);
            children.push(...renderGrid(desktopVars, 1, CANVAS_WIDTH));

            const mobileVars = generateSection('mobile', bg.variant);
            children.push(...renderGrid(mobileVars, 4, 375));
        });

        const structure: NodeDefinition = {
            "type": "FRAME", "name": "SponsorStripDemo",
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

import { BaseComponent, ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { Main_Navigation_28_Booking, Main_Navigation_28_BookingProps } from "../../components/Alex_CookBook/Main_Navigation_28_Booking/Main_Navigation_28_Booking";
import { UserObservationStickyNote } from "../../components/Miscellaneous/UserObservationStickyNote/UserObservationStickyNote";

interface VariantDefinition {
    title: string;
    props: Partial<Main_Navigation_28_BookingProps>;
    note: string;
}

export class Nav_Booking_28_Demo extends BaseComponent {

    async create(props: ComponentProps): Promise<SceneNode> {
        let variantCounter = 1;
        const CANVAS_WIDTH = 1672;

        const desktopLayouts: ('standard' | 'booking-center' | 'booking-right' | 'booking-left')[] = ['standard', 'booking-center', 'booking-right', 'booking-left'];
        const mobileLayouts: ('standard' | 'booking-center' | 'booking-right' | 'booking-left')[] = ['standard', 'booking-center', 'booking-right', 'booking-left'];
        const desktopMessage = "Unlock huge savings – up to 15% with Genius";

        const styles = [
            { name: "S1: Bdr 24", props: { showBorderedContainer: true, logoRadius: 24, borderOpacity: 0.4 } },
            { name: "S2: Bdr 16", props: { showBorderedContainer: true, logoRadius: 16, borderOpacity: 0.4 } },
            { name: "S3: Bdr+Fill 24", props: { showFilledContainer: true, showBorder: true, logoRadius: 24, borderOpacity: 0.4 } },
            { name: "S4: Bdr+Grad 24", props: { showGradientContainer: true, showBorder: true, logoRadius: 24, borderOpacity: 0.4 } },
            { name: "S5: Fill NoBdr 24", props: { showFilledContainer: true, showBorder: false, logoRadius: 24 } },
            { name: "S6: Grad NoBdr 24", props: { showGradientContainer: true, showBorder: false, logoRadius: 24 } },
            { name: "S7: Solid Blue 24", props: { showSolidBlueContainer: true, showBorder: false, logoRadius: 24 } },
            { name: "S8: Solid Blue+Bdr 24", props: { showSolidBlueContainer: true, showBorder: true, logoRadius: 24, borderOpacity: 0.4 } },
            { name: "S9: Solid Blue 16", props: { showSolidBlueContainer: true, showBorder: false, logoRadius: 16 } },
            { name: "S10: Grad NoBdr 16", props: { showGradientContainer: true, showBorder: false, logoRadius: 16 } },
            { name: "S11: Bdr+Fill 16", props: { showFilledContainer: true, showBorder: true, logoRadius: 16, borderOpacity: 0.4 } },
            { name: "S12: Bdr+Grad 16", props: { showGradientContainer: true, showBorder: true, logoRadius: 16, borderOpacity: 0.4 } }
        ];

        // --- SECTION GENERATION HELPERS ---
        const generateDesktopSection = () => {
            const variants: VariantDefinition[] = [];
            // Base
            [true, false].forEach(full => {
                variants.push({
                    title: `Variant ${variantCounter++}_D-BASE_${full ? 'Full' : 'Coll'}`,
                    props: { platform: "desktop", showFullMenu: full },
                    note: `Base Desktop ${full ? 'Full' : 'Collapsed'}`
                });
            });

            desktopLayouts.forEach(layout => {
                const layoutName = layout.replace('booking-', '').toUpperCase();
                [true, false].forEach(menu => {
                    [true, false].forEach(isMsg => {
                        styles.forEach(s => {
                            variants.push({
                                title: `Variant ${variantCounter++}_D_${layoutName}_${menu ? 'FULL' : 'COLL'}_${isMsg ? 'MSG' : 'LOGO'}_${s.name}`,
                                props: { platform: "desktop", brandingLayout: layout, showFullMenu: menu, message: isMsg ? desktopMessage : undefined, showMarketingIcon: isMsg, ...s.props },
                                note: `${layoutName} (${menu ? 'Full' : 'Coll'}) - ${isMsg ? 'Msg' : 'Logo'} ${s.name}`
                            });
                        });
                    });
                });
            });
            return variants;
        };

        const generateMobileSection = () => {
            const variants: VariantDefinition[] = [];
            mobileLayouts.forEach(layout => {
                const layoutName = layout.replace('booking-', '').toUpperCase();
                [true, false].forEach(isMsg => {
                    // Rule: MSG only in Center
                    if (isMsg && layout !== 'booking-center') return;
                    styles.forEach(s => {
                        variants.push({
                            title: `Variant ${variantCounter++}_M_${layoutName}_${isMsg ? 'MSG' : 'LOGO'}_${s.name}`,
                            props: { platform: "mobile", brandingLayout: layout, showFullMenu: false, message: isMsg ? "Unlock savings" : undefined, showMarketingIcon: isMsg, ...s.props },
                            note: `${layoutName} Mobile - ${isMsg ? 'Msg' : 'Logo'} ${s.name}`
                        });
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
                        // Horizontal (Mobile): Width Fill (FIXED+STRETCH), Height Hug (AUTO)
                        // Vertical (Desktop): Width Fill (FIXED+STRETCH), Height Hug (AUTO)
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
                                "type": "COMPONENT", "name": v.title, "component": Main_Navigation_28_Booking,
                                "props": { ...v.props, name: v.title },
                                "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": itemWidth }
                            },
                            {
                                "type": "COMPONENT", "component": UserObservationStickyNote,
                                "props": { "text": v.note },
                                "layoutProps": { "parentIsAutoLayout": true }
                            }
                        ]
                    }))
                });
            }
            return rows;
        };

        const desktopVars = generateDesktopSection();
        const mobileVars = generateMobileSection();

        const children: NodeDefinition[] = [
            {
                "type": "TEXT",
                "props": { "characters": "Booking 28 Navigation Case (Grid Demo)", "fontSize": 48, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "TEXT",
                "props": { "characters": "Desktop Variants (1 Column)", "fontSize": 32, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            ...renderGrid(desktopVars, 1, CANVAS_WIDTH),
            { "type": "FRAME", "name": "Divider", "layoutProps": { "height": 80, "parentIsAutoLayout": true }, "props": { "layoutMode": "VERTICAL" } },
            {
                "type": "TEXT",
                "props": { "characters": "Mobile Variants (4 Columns)", "fontSize": 32, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            ...renderGrid(mobileVars, 4, 375)
        ];

        const structure: NodeDefinition = {
            "type": "FRAME", "name": "Nav_Booking_28_Demo",
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

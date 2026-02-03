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

        const desktopVariants: VariantDefinition[] = [
            // --- BASE SECTION ---
            { title: `Variant ${variantCounter++}_D-BASE_Full Menu (Simple)`, props: { platform: "desktop", showFullMenu: true }, note: "Desktop Full Menu - Simple." },
            { title: `Variant ${variantCounter++}_D-BASE_Full Menu (Bordered)`, props: { platform: "desktop", showFullMenu: true, showBorderedContainer: true }, note: "Desktop Full Menu - Bordered." },
            { title: `Variant ${variantCounter++}_D-BASE_Full Menu (Filled)`, props: { platform: "desktop", showFullMenu: true, showFilledContainer: true, showBorder: false }, note: "Desktop Full Menu - Filled." },
            { title: `Variant ${variantCounter++}_D-BASE_Full Menu (Gradient)`, props: { platform: "desktop", showFullMenu: true, showGradientContainer: true, showBorder: false }, note: "Desktop Full Menu - Gradient." },
            { title: `Variant ${variantCounter++}_D-BASE_Full Menu (Solid Blue)`, props: { platform: "desktop", showFullMenu: true, showSolidBlueContainer: true, showBorder: false }, note: "Desktop Full Menu - Solid Blue." }
        ];

        const desktopLayouts: ('standard' | 'booking-center' | 'booking-right')[] = ['standard', 'booking-center', 'booking-right'];
        const desktopMessage = "Unlock huge savings – up to 15% with Genius";

        desktopLayouts.forEach(layout => {
            const layoutName = layout === 'standard' ? 'LEFT' : (layout === 'booking-center' ? 'CENTER' : 'RIGHT');

            // 4 Sets per Layout: Full Menu+MSG, Full Menu+LOGO, Collapsed+MSG, Collapsed+LOGO
            [
                { menu: true, content: 'MSG' },
                { menu: true, content: 'LOGO' },
                { menu: false, content: 'MSG' },
                { menu: false, content: 'LOGO' }
            ].forEach(cfg => {
                const isMsg = cfg.content === 'MSG';
                const msgText = isMsg ? desktopMessage : undefined;
                const showMkt = isMsg;

                // 12 Styles per set
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

                styles.forEach((s) => {
                    const menuLabel = cfg.menu ? "FULL" : "COLLAPSED";
                    desktopVariants.push({
                        title: `Variant ${variantCounter++}_D_${layoutName}_${menuLabel}_${cfg.content}_${s.name}`,
                        props: {
                            platform: "desktop",
                            showFullMenu: cfg.menu,
                            brandingLayout: layout,
                            message: msgText,
                            showMarketingIcon: showMkt,
                            ...s.props
                        },
                        note: `${layoutName} (${menuLabel}) - ${cfg.content} ${s.name}`
                    });
                });
            });
        });

        // --- MOBILE SYSTEMATIC GENERATION ---
        const mobileLayouts: Array<'standard' | 'booking-center' | 'booking-right'> = ['standard', 'booking-center', 'booking-right'];
        const mobileVariants: VariantDefinition[] = [
            { title: "M-BASE_Full Menu (Simple)", props: { platform: "mobile", showFullMenu: true }, note: "Mobile Full Menu - Simple." },
            { title: "M-BASE_Full Menu (Bordered)", props: { platform: "mobile", showFullMenu: true, showBorderedContainer: true }, note: "Mobile Full Menu - Bordered." }
        ];

        mobileLayouts.forEach(layout => {
            const layoutName = layout === 'standard' ? 'LEFT' : (layout === 'booking-center' ? 'CENTER' : 'RIGHT');

            // 2 Sets: With MSG (Center Only), Just Logo (All)
            ['MSG', 'LOGO'].forEach(contentType => {
                const isMsg = contentType === 'MSG';

                // Skip LEFT/RIGHT for MSG
                if (isMsg && layout !== 'booking-center') return;

                const msgText = isMsg ? "Unlock huge savings" : undefined;
                const showMkt = isMsg;

                // 12 Styles per set
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

                styles.forEach((s) => {
                    mobileVariants.push({
                        title: `Variant ${variantCounter++}_M_${layoutName}_${contentType}_${s.name}`,
                        props: {
                            platform: "mobile",
                            showFullMenu: false,
                            brandingLayout: layout,
                            message: msgText,
                            showMarketingIcon: showMkt,
                            ...s.props
                        },
                        note: `${layoutName} Layout - ${contentType} ${s.name}`
                    });
                });
            });
        });

        const children: NodeDefinition[] = [];

        children.push({
            "type": "TEXT",
            "props": { "characters": "Booking 28 Navigation Case (Demo)", "fontSize": 48, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
            "layoutProps": { "parentIsAutoLayout": true }
        });

        // DESKTOP SECTION
        children.push({
            "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "layoutMode": "VERTICAL" }
        });
        children.push({
            "type": "TEXT",
            "props": { "characters": "Desktop Variants", "fontSize": 36, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
            "layoutProps": { "parentIsAutoLayout": true }
        });

        desktopVariants.forEach((v, index) => {
            // Add Group Headers
            let groupHeader = "";
            if (v.title.includes("D-BASE_")) groupHeader = "--- DESKTOP BASE ---";
            if (v.title.includes("D_LEFT_MSG")) groupHeader = "--- DESKTOP GROUP A: LEFT Layout (With Message - 12 Styles) ---";
            if (v.title.includes("D_LEFT_LOGO")) groupHeader = "--- DESKTOP GROUP B: LEFT Layout (Just Logo - 12 Styles) ---";
            if (v.title.includes("D_CENTER_MSG")) groupHeader = "--- DESKTOP GROUP C: CENTER Layout (With Message - 12 Styles) ---";
            if (v.title.includes("D_CENTER_LOGO")) groupHeader = "--- DESKTOP GROUP D: CENTER Layout (Just Logo - 12 Styles) ---";
            if (v.title.includes("D_RIGHT_MSG")) groupHeader = "--- DESKTOP GROUP E: RIGHT Layout (With Message - 12 Styles) ---";
            if (v.title.includes("D_RIGHT_LOGO")) groupHeader = "--- DESKTOP GROUP F: RIGHT Layout (Just Logo - 12 Styles) ---";

            if (groupHeader) {
                children.push({
                    "type": "FRAME", "name": "Divider", "layoutProps": { "height": 80, "parentIsAutoLayout": true }, "props": { "layoutMode": "VERTICAL" }
                });
                children.push({
                    "type": "TEXT",
                    "props": { "characters": groupHeader, "fontSize": 28, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                    "layoutProps": { "parentIsAutoLayout": true }
                });
            }

            children.push(
                {
                    "type": "TEXT",
                    "props": { "characters": v.title, "fontSize": 24, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
                    "layoutProps": { "parentIsAutoLayout": true }
                },
                {
                    "type": "COMPONENT", "name": v.title, "component": Main_Navigation_28_Booking,
                    "props": { ...v.props, name: v.title },
                    "layoutProps": {
                        "parentIsAutoLayout": true,
                        "layoutAlign": "STRETCH",
                        "width": 1680
                    }
                },
                {
                    "type": "COMPONENT", "component": UserObservationStickyNote,
                    "props": { "text": v.note },
                    "layoutProps": { "parentIsAutoLayout": true }
                },
                {
                    "type": "FRAME", "name": "SmallSpacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "layoutMode": "VERTICAL" }
                }
            );
        });

        // MOBILE SECTION
        children.push({
            "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "layoutMode": "VERTICAL" }
        });
        children.push({
            "type": "TEXT",
            "props": { "characters": "Mobile Variants (Fixed 54px Header / 32px Branding Area)", "fontSize": 36, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
            "layoutProps": { "parentIsAutoLayout": true }
        });

        mobileVariants.forEach(v => {
            // Add Group Headers
            let groupHeader = "";
            if (v.title.includes("M-BASE_")) groupHeader = "--- MOBILE BASE ---";
            if (v.title.includes("M_LEFT_LOGO")) groupHeader = "--- MOBILE GROUP A: LEFT Layout (Just Logo - 12 Styles) ---";
            if (v.title.includes("M_CENTER_MSG")) groupHeader = "--- MOBILE GROUP B: CENTER Layout (With Message - 12 Styles) ---";
            if (v.title.includes("M_CENTER_LOGO")) groupHeader = "--- MOBILE GROUP C: CENTER Layout (Just Logo - 12 Styles) ---";
            if (v.title.includes("M_RIGHT_LOGO")) groupHeader = "--- MOBILE GROUP D: RIGHT Layout (Just Logo - 12 Styles) ---";

            if (groupHeader) {
                children.push({
                    "type": "FRAME", "name": "Divider", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "layoutMode": "VERTICAL" }
                });
                children.push({
                    "type": "TEXT",
                    "props": { "characters": groupHeader, "fontSize": 28, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                    "layoutProps": { "parentIsAutoLayout": true }
                });
            }

            children.push(
                {
                    "type": "TEXT",
                    "props": { "characters": v.title, "fontSize": 24, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
                    "layoutProps": { "parentIsAutoLayout": true }
                },
                {
                    "type": "COMPONENT", "name": v.title, "component": Main_Navigation_28_Booking,
                    "props": { ...v.props, name: v.title },
                    "layoutProps": {
                        "parentIsAutoLayout": true,
                        "layoutAlign": "INHERIT",
                        "width": 375
                    }
                },
                {
                    "type": "COMPONENT", "component": UserObservationStickyNote,
                    "props": { "text": v.note },
                    "layoutProps": { "parentIsAutoLayout": true }
                },
                {
                    "type": "FRAME", "name": "SmallSpacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "layoutMode": "VERTICAL" }
                }
            );
        });

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Nav_Booking_28_Demo",
            "props": {
                "layoutMode": "VERTICAL",
                "itemSpacing": 32,
                "paddingTop": 64, "paddingRight": 64, "paddingBottom": 64, "paddingLeft": 64,
                "fills": [{ "type": "SOLID", "color": { "r": 0.96, "g": 0.96, "b": 0.96 } }]
            },
            "layoutProps": { "width": 1800, "parentIsAutoLayout": false },
            "children": children
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

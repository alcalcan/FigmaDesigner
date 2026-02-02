import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";
import { BookingLogo_color } from "../BookingLogo_color/BookingLogo_color";
import SVG_Desktop_Logo from "../Main_Navigation_28/assets/Main_Navigation_28_desktop_assets_vector_Vector_1277_36294_svg_156x23_986331939697266.svg";
import SVG_Desktop_Icon from "../Main_Navigation_28/assets/Main_Navigation_28_desktop_assets_icon_Vector_1277_36281_svg_8_385973930358887x6_209956169128418.svg";
import SVG_Mobile_Logo from "../Main_Navigation_28/assets/Main_Navigation_28_mobile_assets_icon_Vector_1277_37512_svg_23_699735641479492x39_999935150146484.svg";
import SVG_Mobile_Menu_Icon from "../Main_Navigation_28/assets/Main_Navigation_28_mobile_assets_icon_Vector_1277_37367_svg_18_75x12_5.svg";

export interface Main_Navigation_28_BookingProps extends ComponentProps {
    platform?: 'desktop' | 'mobile';
    logoVariant?: 'color' | 'white';
    showFullMenu?: boolean;
    brandingLayout?: 'standard' | 'booking-center' | 'booking-right';
    message?: string;
    showMarketingIcon?: boolean;
    showBorderedContainer?: boolean;
    showFilledContainer?: boolean;
}

export class Main_Navigation_28_Booking extends BaseComponent {
    async create(props: Main_Navigation_28_BookingProps): Promise<SceneNode> {
        const isMobile = props.platform === 'mobile';
        const logoVariant = props.logoVariant || 'white';
        const showFullMenu = props.showFullMenu ?? true;
        const brandingLayout = props.brandingLayout || 'standard';
        const message = props.message;
        const showMarketingIcon = props.showMarketingIcon;
        const showBorderedContainer = props.showBorderedContainer;
        const showFilledContainer = props.showFilledContainer;

        const backgroundColor = { "r": 0, "g": 0.16, "b": 0.77 };

        const width = props.width ?? (isMobile ? 375 : 1680);
        const paddingLeft = isMobile ? 12 : 24;
        const paddingRight = isMobile ? 12 : 24;
        const paddingTop = isMobile ? 4 : 13;
        const paddingBottom = isMobile ? 4 : 13;

        const navHeight = isMobile ? 46 : 54;
        const euroLogoWidth = isMobile ? 44 : 204;
        const euroLogoHeight = isMobile ? 40 : 24;

        const bookingLogoWidth = isMobile ? 80 : 120;

        const menuItemHeight = 30;
        const fontSize = isMobile ? 14 : 16;
        const fontFamily = "UEFA Euro Pro";

        const leftLogoContent: NodeDefinition = isMobile ? {
            "type": "FRAME" as const,
            "name": "Link - UEFA EURO 2028",
            "props": { "layoutMode": "VERTICAL", "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER" },
            "layoutProps": { "width": 44, "height": 40, "parentIsAutoLayout": true },
            "children": [
                {
                    "type": "VECTOR" as const,
                    "shouldFlatten": true,
                    "name": "Vector",
                    "layoutProps": { "width": 23.70, "height": 40, "parentIsAutoLayout": true },
                    "svgContent": SVG_Mobile_Logo
                }
            ]
        } : {
            "type": "VECTOR" as const,
            "name": "Vector",
            "layoutProps": { "width": 156, "height": 23.99, "parentIsAutoLayout": true },
            "svgContent": SVG_Desktop_Logo
        };

        const rightLogoContent: NodeDefinition = {
            "type": "COMPONENT",
            "name": "BookingLogo",
            "component": BookingLogo_color,
            "props": { "variant": logoVariant },
            "layoutProps": { "parentIsAutoLayout": true, "width": bookingLogoWidth, "height": (bookingLogoWidth / 118) * 20 }
        };

        const navItems = [
            { name: "Video", isSelected: false },
            { name: "News", isSelected: false }
        ];

        const secondNavItems = [
            { name: "About", isSelected: false },
            { name: "Store", isSelected: false }
        ];

        const thirdItemName = isMobile ? "More" : (showFullMenu ? "History" : "Menu");

        const spacer: NodeDefinition = {
            "type": "FRAME" as const, "name": "Spacer", "layoutProps": { "layoutGrow": 1, "layoutAlign": "STRETCH" as const, "parentIsAutoLayout": true }, "props": { "layoutMode": "HORIZONTAL" as const }
        };

        const euroLogoBlock: NodeDefinition = {
            "type": "FRAME" as const,
            "name": "Left Logo Area (Euro)",
            "props": {
                "layoutMode": "HORIZONTAL",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER"
            },
            "layoutProps": { "width": euroLogoWidth, "height": euroLogoHeight, "parentIsAutoLayout": true },
            "children": [leftLogoContent]
        };

        const bookingLogoBlock: NodeDefinition = {
            "type": "FRAME" as const,
            "name": "Right Logo Area (Booking)",
            "props": {
                "layoutMode": "HORIZONTAL",
                "primaryAxisAlignItems": "MAX",
                "counterAxisAlignItems": "CENTER", "counterAxisSizingMode": "AUTO"
            },
            "layoutProps": {
                "parentIsAutoLayout": true,
                "layoutAlign": "STRETCH" as const
            },
            "children": [rightLogoContent]
        };

        const marketingMessageBlock: NodeDefinition | null = message ? {
            "type": "FRAME" as const,
            "name": "Marketing Message Container",
            "props": {
                "layoutMode": "HORIZONTAL" as const,
                "itemSpacing": 8,
                "counterAxisAlignItems": "CENTER" as const,
                "counterAxisSizingMode": "AUTO" as const,
                "primaryAxisSizingMode": "AUTO" as const,
                "fills": []
            },
            "layoutProps": { "parentIsAutoLayout": true },
            "children": [
                {
                    "type": "TEXT" as const,
                    "name": "Marketing Message",
                    "props": {
                        "characters": message,
                        "fontSize": 14,
                        "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }],
                        "font": { "family": "Manrope", "style": "Bold" } // Using Manrope for marketing message distinctiveness
                    },
                    "layoutProps": { "parentIsAutoLayout": true }
                },
                ...(showMarketingIcon ? [{
                    "type": "VECTOR" as const,
                    "name": "Marketing Icon",
                    "layoutProps": { "width": 12, "height": 12, "parentIsAutoLayout": true, "layoutAlign": "STRETCH" as const },
                    "svgContent": `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 3L4.5 6L7.5 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                }] : [])
            ]
        } : null;

        const logoMessageGroupBlock: NodeDefinition | null = (marketingMessageBlock) ? {
            "type": "FRAME",
            "name": "Logo Message Group",
            "props": {
                "layoutMode": "HORIZONTAL", "itemSpacing": 16,
                "counterAxisAlignItems": "CENTER", "primaryAxisAlignItems": "CENTER",
                "counterAxisSizingMode": "AUTO", "primaryAxisSizingMode": "AUTO",
                "fills": []
            },
            "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" as const },
            "children": [marketingMessageBlock, bookingLogoBlock]
        } : null;

        const contentToWrap = logoMessageGroupBlock || bookingLogoBlock;

        const borderedLogoGroup: NodeDefinition = showBorderedContainer ? {
            "type": "FRAME" as const,
            "name": "Bordered Logo Container",
            "props": {
                "layoutMode": "HORIZONTAL" as const,
                "primaryAxisAlignItems": "CENTER" as const,
                "counterAxisAlignItems": "CENTER" as const,
                "paddingTop": isMobile ? 4 : 8,
                "paddingBottom": isMobile ? 4 : 8,
                "paddingLeft": 16,
                "paddingRight": 16,
                "cornerRadius": 24,
                "strokes": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }],
                "strokeWeight": 1,
                "fills": showFilledContainer ? [{ "type": "SOLID" as const, "color": { "r": 0, "g": 0.42, "b": 0.89 } }] : []
            },
            "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" as const },
            "children": [contentToWrap]
        } : contentToWrap;

        const menuBlockGrow = (brandingLayout === 'standard' && !isMobile) ? 1 : 0;
        const menuBlockAlign = (brandingLayout === 'standard' && !isMobile) ? "MIN" : "MAX"; // If pushed to right, align items to right (Max)

        const menuBlock: NodeDefinition = {
            "type": "FRAME" as const,
            "name": "Container (Menu)",
            "props": {
                "layoutMode": "HORIZONTAL",
                "itemSpacing": isMobile ? 4 : 24,
                "primaryAxisAlignItems": menuBlockAlign, "counterAxisAlignItems": "CENTER", "counterAxisSizingMode": "AUTO"
            },
            "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": menuBlockGrow },
            "children": [
                {
                    "type": "FRAME" as const,
                    "name": "Menu item Group",
                    "props": {
                        "layoutMode": "HORIZONTAL",
                        "itemSpacing": isMobile ? 4 : 24,
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER", "counterAxisSizingMode": "AUTO",
                        "fills": []
                    },
                    "layoutProps": { "parentIsAutoLayout": true },
                    "children": [
                        ...(showFullMenu ? navItems.map(item => ({
                            "type": "FRAME" as const,
                            "name": `Menuitem - ${item.name}`,
                            "props": {
                                "layoutMode": "HORIZONTAL" as const, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "cornerRadius": 9999, "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                                "fills": []
                            },
                            "layoutProps": { "height": menuItemHeight, "parentIsAutoLayout": true },
                            "children": [{
                                "type": "TEXT" as const,
                                "props": {
                                    "characters": item.name,
                                    "fontSize": fontSize,
                                    "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }],
                                    "font": { "family": fontFamily, "style": "Book" }
                                },
                                "layoutProps": { "parentIsAutoLayout": true }
                            }]
                        } as NodeDefinition)) : []),

                        {
                            "type": "FRAME" as const,
                            "name": "More-History Container",
                            "props": {
                                "layoutMode": "HORIZONTAL",
                                "itemSpacing": 8,
                                "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8,
                                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                                "fills": []
                            },
                            "layoutProps": { "height": menuItemHeight, "parentIsAutoLayout": true },
                            "children": [
                                {
                                    "type": "TEXT" as const,
                                    "props": { "characters": thirdItemName, "fontSize": fontSize, "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }], "font": { "family": fontFamily, "style": "Book" } },
                                    "layoutProps": { "parentIsAutoLayout": true }
                                },
                                {
                                    "type": "FRAME" as const,
                                    "name": "Icon Container",
                                    "props": {
                                        "layoutMode": "HORIZONTAL", "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                                        "fills": []
                                    },
                                    "layoutProps": { "width": (isMobile || !showFullMenu) ? 24 : 16, "height": (isMobile || !showFullMenu) ? 24 : 16, "parentIsAutoLayout": true },
                                    "children": [{
                                        "type": "VECTOR" as const,
                                        "props": {},
                                        "layoutProps": {
                                            "width": (isMobile || !showFullMenu) ? 18.75 : 8.39, "height": (isMobile || !showFullMenu) ? 12.5 : 6.21, "parentIsAutoLayout": false,
                                            "relativeTransform": (isMobile || !showFullMenu) ? [[1, 0, 2.6], [0, 1, 5.75]] : [[1, 0, 4], [0, 1, 5]] as T2x3
                                        },
                                        "svgContent": (isMobile || !showFullMenu) ? SVG_Mobile_Menu_Icon : SVG_Desktop_Icon
                                    }]
                                }
                            ]
                        },

                        ...((!isMobile && showFullMenu) ? secondNavItems.map(item => ({
                            "type": "FRAME" as const,
                            "name": `Menuitem - ${item.name}`,
                            "props": {
                                "layoutMode": "HORIZONTAL" as const, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "cornerRadius": 9999, "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                                "fills": []
                            },
                            "layoutProps": { "height": menuItemHeight, "parentIsAutoLayout": true },
                            "children": [{
                                "type": "TEXT" as const,
                                "props": { "characters": item.name, "fontSize": fontSize, "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }], "font": { "family": fontFamily, "style": "Book" } },
                                "layoutProps": { "parentIsAutoLayout": true }
                            }]
                        } as NodeDefinition)) : [])
                    ]
                }
            ]
        };

        let navChildren: NodeDefinition[] = [];

        if (brandingLayout === 'booking-center') {
            navChildren = [euroLogoBlock, spacer, borderedLogoGroup, spacer, menuBlock];
        } else if (brandingLayout === 'booking-right') {
            navChildren = [euroLogoBlock, spacer, borderedLogoGroup, menuBlock];
        } else {
            // Standard
            if (isMobile) {
                // On Mobile: [Euro] [Booking] [Spacer] [Menu]
                navChildren = [euroLogoBlock, borderedLogoGroup, spacer, menuBlock];
            } else {
                // On Desktop: [Euro] [Menu] [Booking]
                navChildren = [euroLogoBlock, menuBlock, borderedLogoGroup];
            }
        }

        const structure: NodeDefinition = {
            "type": "FRAME" as const,
            "name": "Main_Navigation_28_Booking",
            "props": {
                "layoutMode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "AUTO",
                "paddingTop": paddingTop, "paddingRight": paddingRight, "paddingBottom": paddingBottom, "paddingLeft": paddingLeft,
                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                "fills": [{ "type": "SOLID", "color": backgroundColor }]
            },
            "layoutProps": { "width": width, "parentIsAutoLayout": false },
            "children": [{
                "type": "FRAME" as const,
                "name": "Nav - Main navigation",
                "props": {
                    "layoutMode": "HORIZONTAL",
                    "primaryAxisAlignItems": "MIN", // Left align
                    "itemSpacing": isMobile ? 12 : 32,
                    "counterAxisAlignItems": "CENTER",
                    "layoutGrow": 1
                },
                "layoutProps": { "height": navHeight, "parentIsAutoLayout": true, "layoutGrow": 1 },
                "children": navChildren
            }]
        } as NodeDefinition;

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

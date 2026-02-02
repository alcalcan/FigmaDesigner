import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";
import { BookingLogo_color } from "../BookingLogo_color/BookingLogo_color";

// Reuse assets from Main_Navigation_28
import SVG_Desktop_Logo from "../Main_Navigation_28/assets/Main_Navigation_28_desktop_assets_vector_Vector_1277_36294_svg_156x23_986331939697266.svg";
import SVG_Desktop_Icon from "../Main_Navigation_28/assets/Main_Navigation_28_desktop_assets_icon_Vector_1277_36281_svg_8_385973930358887x6_209956169128418.svg";
import SVG_Mobile_Logo from "../Main_Navigation_28/assets/Main_Navigation_28_mobile_assets_icon_Vector_1277_37512_svg_23_699735641479492x39_999935150146484.svg";
import SVG_Mobile_Menu_Icon from "../Main_Navigation_28/assets/Main_Navigation_28_mobile_assets_icon_Vector_1277_37367_svg_18_75x12_5.svg";

export interface Main_Navigation_28_BookingProps extends ComponentProps {
    platform?: 'desktop' | 'mobile';
    logoVariant?: 'color' | 'white';
}

export class Main_Navigation_28_Booking extends BaseComponent {
    async create(props: Main_Navigation_28_BookingProps): Promise<SceneNode> {
        const isMobile = props.platform === 'mobile';
        const logoVariant = props.logoVariant || 'white';

        // REVERT: Using Euro 28 Blue Background
        const backgroundColor = { "r": 0, "g": 0.16, "b": 0.77 };

        // Dynamic properties based on platform
        const width = props.width ?? (isMobile ? 375 : 1680);
        const paddingLeft = isMobile ? 12 : 24;
        const paddingRight = isMobile ? 12 : 24;
        const paddingTop = isMobile ? 4 : 13; // Reverted padding to match Euro 28
        const paddingBottom = isMobile ? 4 : 13; // Reverted padding to match Euro 28

        const navHeight = isMobile ? 46 : 54;
        const euroLogoWidth = isMobile ? 44 : 204;
        const euroLogoHeight = isMobile ? 40 : 24;

        const bookingLogoWidth = isMobile ? 80 : 120;

        const menuItemHeight = 30;
        const fontSize = isMobile ? 14 : 16;
        // REVERT: Using standard styling for font
        const fontFamily = "UEFA Euro Pro";

        // LEFT LOGO: Euro 2028 (Standard)
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
                    "props": {},
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

        // RIGHT LOGO: Booking.com Logo (Co-branding)
        const rightLogoContent: NodeDefinition = {
            "type": "COMPONENT",
            "name": "BookingLogo",
            "component": BookingLogo_color,
            "props": { "variant": logoVariant },
            "layoutProps": { "parentIsAutoLayout": true, "width": bookingLogoWidth, "height": (bookingLogoWidth / 118) * 20 }
        };

        // REVERT: Using Euro Menu Items
        const navItems = [
            { name: "Video", isSelected: false },
            { name: "News", isSelected: false }
        ];

        const secondNavItems = [
            { name: "About", isSelected: false },
            { name: "Store", isSelected: false }
        ];

        const thirdItemName = isMobile ? "More" : "History";

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
                "children": [
                    {
                        "type": "FRAME" as const,
                        "name": "Left Logo Area (Euro)",
                        "props": {
                            "layoutMode": "HORIZONTAL",
                            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER"
                        },
                        "layoutProps": { "width": euroLogoWidth, "height": euroLogoHeight, "parentIsAutoLayout": true },
                        "children": [leftLogoContent]
                    },
                    {
                        "type": "FRAME" as const,
                        "name": "Container (Menu)",
                        "props": {
                            "layoutMode": "HORIZONTAL",
                            "itemSpacing": isMobile ? 4 : 24,
                            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER"
                        },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": 1 },
                        "children": [
                            {
                                "type": "FRAME" as const,
                                "name": "Menu item Group",
                                "props": {
                                    "layoutMode": "HORIZONTAL",
                                    "itemSpacing": isMobile ? 4 : 24,
                                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER"
                                },
                                "layoutProps": { "parentIsAutoLayout": true },
                                "children": [
                                    ...navItems.map(item => ({
                                        "type": "FRAME" as const,
                                        "name": `Menuitem - ${item.name}`,
                                        "props": {
                                            "layoutMode": "HORIZONTAL" as const, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "cornerRadius": 9999, "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER"
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
                                    } as NodeDefinition)),

                                    // More / History Container (Standard Euro 28 Logic)
                                    {
                                        "type": "FRAME" as const,
                                        "name": "More-History Container",
                                        "props": {
                                            "layoutMode": "HORIZONTAL",
                                            "itemSpacing": 8,
                                            "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8,
                                            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER"
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
                                                "props": { "layoutMode": "HORIZONTAL", "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER" },
                                                "layoutProps": { "width": isMobile ? 24 : 16, "height": isMobile ? 24 : 16, "parentIsAutoLayout": true },
                                                "children": [{
                                                    "type": "VECTOR" as const,
                                                    "props": {},
                                                    "layoutProps": {
                                                        "width": isMobile ? 18.75 : 8.39, "height": isMobile ? 12.5 : 6.21, "parentIsAutoLayout": false,
                                                        "relativeTransform": isMobile ? [[1, 0, 2.6], [0, 1, 5.75]] : [[1, 0, 4], [0, 1, 5]] as T2x3
                                                    },
                                                    "svgContent": isMobile ? SVG_Mobile_Menu_Icon : SVG_Desktop_Icon
                                                }]
                                            }
                                        ]
                                    },

                                    ...(!isMobile ? secondNavItems.map(item => ({
                                        "type": "FRAME" as const,
                                        "name": `Menuitem - ${item.name}`,
                                        "props": {
                                            "layoutMode": "HORIZONTAL" as const, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "cornerRadius": 9999, "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER"
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
                    },
                    {
                        "type": "FRAME" as const,
                        "name": "Right Logo Area (Booking)",
                        "props": {
                            "layoutMode": "HORIZONTAL",
                            "primaryAxisAlignItems": "MAX", // Align right
                            "counterAxisAlignItems": "CENTER"
                        },
                        // Important: This is a sibling of Container (Menu).
                        // Parent Align is MIN. Spacing is 32.
                        // [Logo] -32- [Menu(Grow=1)] -32- [RightLogo]
                        // If Menu grows, it takes up all space, pushing RightLogo to the end.
                        "layoutProps": {
                            "parentIsAutoLayout": true,
                            "minWidth": bookingLogoWidth
                        },
                        "children": [rightLogoContent]
                    }
                ]
            }]
        } as NodeDefinition;

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

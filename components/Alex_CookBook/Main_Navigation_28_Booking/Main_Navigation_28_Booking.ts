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
    brandingLayout?: 'standard' | 'booking-center' | 'booking-right' | 'booking-left';
    message?: string;
    showMarketingIcon?: boolean;
    showBorderedContainer?: boolean;
    showFilledContainer?: boolean;
    showGradientContainer?: boolean;
    showSolidBlueContainer?: boolean;
    logoRadius?: number;
    showBorder?: boolean;
    logoPosition?: 'left' | 'right';
    borderOpacity?: number;
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
        const showGradientContainer = props.showGradientContainer;
        const showSolidBlueContainer = props.showSolidBlueContainer;
        const logoRadius = props.logoRadius ?? 24;
        const showBorder = props.showBorder ?? showBorderedContainer;
        const logoPosition = props.logoPosition || 'right';
        const borderOpacity = props.borderOpacity ?? 0.4;

        const backgroundColor = { "r": 0, "g": 0.16, "b": 0.77 };

        const width = props.width ?? (isMobile ? 375 : 1680);
        const paddingLeft = isMobile ? 12 : 24;
        const paddingRight = isMobile ? 12 : 24;
        const paddingTop = isMobile ? 4 : 13;
        const paddingBottom = isMobile ? 4 : 13;

        const navHeight = 54; // Enforced 54px for both desktop and mobile
        const euroLogoWidth = isMobile ? 44 : 204;
        const euroLogoHeight = 24;

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
            "layoutProps": {
                "width": euroLogoWidth,
                "height": isMobile ? undefined : euroLogoHeight,
                "parentIsAutoLayout": true
            },
            "children": [leftLogoContent]
        };

        const marketingIconWidth = isMobile ? 4 : 6;
        const marketingIconHeight = isMobile ? 8 : 12;
        const marketingIconSvg = isMobile ?
            `<svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 1L1 4L3 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>` :
            `<svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 1L1 6L5 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

        // Branding children: FLAT list of [Message, Icon, Logo]
        const brandingChildren: NodeDefinition[] = [];

        if (message) {
            brandingChildren.push({
                "type": "TEXT" as const,
                "name": "Marketing Message",
                "props": {
                    "characters": message,
                    "fontSize": isMobile ? 12 : 14,
                    "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }],
                    "font": { "family": "Manrope", "style": "Bold" }
                },
                "layoutProps": { "parentIsAutoLayout": true }
            });

            if (showMarketingIcon) {
                brandingChildren.push({
                    "type": "VECTOR" as const,
                    "name": "Marketing Icon",
                    "layoutProps": { "width": marketingIconWidth, "height": marketingIconHeight, "parentIsAutoLayout": true },
                    "svgContent": marketingIconSvg
                });
            }
        }

        brandingChildren.push(rightLogoContent);

        const brandingPill: NodeDefinition = {
            "type": "FRAME" as const,
            "name": "Branding Pill",
            "props": {
                "layoutMode": "HORIZONTAL",
                "itemSpacing": isMobile ? 8 : 12,
                "counterAxisAlignItems": "CENTER",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": isMobile ? "FIXED" : "AUTO",
                "paddingLeft": (showBorderedContainer || showFilledContainer || showGradientContainer || showSolidBlueContainer) ? (isMobile ? 12 : 16) : 0,
                "paddingRight": (showBorderedContainer || showFilledContainer || showGradientContainer || showSolidBlueContainer) ? (isMobile ? 12 : 16) : 0,
                "cornerRadius": logoRadius,
                "strokes": showBorder ? [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "opacity": borderOpacity }] : [],
                "strokeWeight": showBorder ? 1 : 0,
                "fills": showSolidBlueContainer ? [{ "type": "SOLID", "color": { "r": 0, "g": 0.42, "b": 0.89 }, "opacity": 1.0 }] :
                    (showFilledContainer ? [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "opacity": 0.1 }] :
                        (showGradientContainer ? [{
                            "type": "GRADIENT_LINEAR",
                            "gradientStops": [
                                { "position": 0, "color": { "r": 0, "g": 0.42, "b": 0.89, "a": 1 } }, // Brighter Light Blue (Right)
                                { "position": 1, "color": { "r": 0, "g": 0.16, "b": 0.77, "a": 1 } }  // Main Nav Blue (Left)
                            ],
                            "gradientTransform": [[-1, 0, 1], [0, 1, 0]] // Horizontal Right-to-Left
                        }] : []))
            },
            "layoutProps": {
                "parentIsAutoLayout": true,
                "layoutAlign": "STRETCH",
                "height": isMobile ? 32 : undefined // Enforce 32px height on mobile
            },
            "children": brandingChildren
        };

        const brandingBlock: NodeDefinition = {
            "type": "FRAME" as const,
            "name": "Branding Area",
            "props": {
                "layoutMode": "HORIZONTAL",
                "primaryAxisAlignItems": brandingLayout === 'booking-right' ? "MAX" : (brandingLayout === 'booking-center' ? "CENTER" : "MIN"),
                "counterAxisAlignItems": "CENTER",
                "primaryAxisSizingMode": "AUTO"
            },
            "layoutProps": {
                "layoutGrow": 0,
                "layoutAlign": isMobile ? "INHERIT" : "STRETCH",
                "parentIsAutoLayout": true,
                "height": isMobile ? 32 : undefined
            },
            "children": [brandingPill]
        };
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
                                ...((!(isMobile && message)) ? [{
                                    "type": "TEXT" as const,
                                    "props": { "characters": thirdItemName, "fontSize": fontSize, "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }], "font": { "family": fontFamily, "style": "Book" } },
                                    "layoutProps": { "parentIsAutoLayout": true }
                                }] : []),
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
            // True centering: [Left (Grow:1, Min)] [Center (Fixed/Hug)] [Right (Grow:1, Max)]
            const leftWrapper: NodeDefinition = {
                "type": "FRAME", "name": "Left Wrapper",
                "props": { "layoutMode": "HORIZONTAL", "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER", "fills": [] },
                "layoutProps": {
                    "layoutGrow": 1,
                    "parentIsAutoLayout": true,
                    "layoutAlign": "STRETCH"
                },
                "children": [euroLogoBlock]
            };
            const rightWrapper: NodeDefinition = {
                "type": "FRAME", "name": "Right Wrapper",
                "props": { "layoutMode": "HORIZONTAL", "primaryAxisAlignItems": "MAX", "counterAxisAlignItems": "CENTER", "fills": [] },
                "layoutProps": { "layoutGrow": 1, "parentIsAutoLayout": true, "layoutAlign": "STRETCH" },
                "children": [menuBlock]
            };
            navChildren = [leftWrapper, brandingBlock, rightWrapper];
        } else if (brandingLayout === 'booking-right') {
            // [Euro (Min)] [Spacer (Grow)] [Logo + Menu (Grouped together)]
            const rightGroup: NodeDefinition = {
                "type": "FRAME", "name": "Right Group",
                "props": { "layoutMode": "HORIZONTAL", "itemSpacing": isMobile ? 12 : 32, "primaryAxisAlignItems": "MAX", "counterAxisAlignItems": "CENTER", "fills": [] },
                "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" },
                "children": [brandingBlock, menuBlock]
            };
            navChildren = [euroLogoBlock, spacer, rightGroup];
        } else if (brandingLayout === 'booking-left') {
            // [Euro + Logo (Grouped)] [Spacer (Grow)] [Menu]
            const leftGroup: NodeDefinition = {
                "type": "FRAME", "name": "Left Group",
                "props": { "layoutMode": "HORIZONTAL", "itemSpacing": isMobile ? 12 : 32, "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER", "fills": [] },
                "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" },
                "children": [euroLogoBlock, brandingBlock]
            };
            navChildren = [leftGroup, spacer, menuBlock];
        } else {
            // Standard
            if (isMobile) {
                // On Mobile: [Euro] [Booking] [Spacer] [Menu]
                navChildren = [euroLogoBlock, brandingBlock, spacer, menuBlock];
            } else {
                // On Desktop: [Euro] [Menu] [Booking]
                navChildren = [euroLogoBlock, menuBlock, brandingBlock];
            }
        }

        const containerHeight = isMobile ? 62 : 80;

        const structure: NodeDefinition = {
            "type": "FRAME" as const,
            "name": "Main_Navigation_28_Booking",
            "props": {
                "layoutMode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "FIXED",
                "paddingTop": paddingTop, "paddingRight": paddingRight, "paddingBottom": paddingBottom, "paddingLeft": paddingLeft,
                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                "fills": [{ "type": "SOLID", "color": backgroundColor }],
                "cornerRadius": 0
            },
            "layoutProps": {
                "width": width,
                "height": containerHeight,
                "parentIsAutoLayout": false,
                ...((props as any).layoutProps || {})
            },
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

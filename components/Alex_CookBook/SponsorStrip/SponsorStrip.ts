import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { BookingLogo_color } from "../BookingLogo_color/BookingLogo_color";

export interface SponsorStripProps extends ComponentProps {
    platform?: 'desktop' | 'mobile';
    logoVariant?: 'color' | 'white';
    pillAlignment?: 'center' | 'right';
    stripBackground?: 'euro-blue' | 'dark-blue' | 'light-blue' | 'blue-gradient' | 'booking-light-blue';
    message?: string;
    showMarketingIcon?: boolean;
    showBorderedContainer?: boolean;
    showFilledContainer?: boolean;
    showGradientContainer?: boolean;
    showSolidBlueContainer?: boolean;
    logoRadius?: number;
    showBorder?: boolean;
    borderOpacity?: number;
}

export class SponsorStrip extends BaseComponent {
    async create(props: SponsorStripProps): Promise<SceneNode> {
        const isMobile = props.platform === 'mobile';
        const logoVariant = props.logoVariant || 'white';
        const pillAlignment = props.pillAlignment || 'center';
        const stripBackground = props.stripBackground || 'euro-blue';
        const message = props.message;
        const showMarketingIcon = props.showMarketingIcon;
        const showBorderedContainer = props.showBorderedContainer;
        const showFilledContainer = props.showFilledContainer;
        const showGradientContainer = props.showGradientContainer;
        const showSolidBlueContainer = props.showSolidBlueContainer;
        const logoRadius = props.logoRadius ?? 24;
        const showBorder = props.showBorder ?? showBorderedContainer;
        const borderOpacity = props.borderOpacity ?? 0.4;

        // Background Color Definitions
        const colors = {
            'euro-blue': { r: 0, g: 0.16, b: 0.77 },
            'dark-blue': { r: 0.04, g: 0.05, b: 0.28 },
            'light-blue': { r: 0, g: 0.53, b: 1 },
            'booking-light-blue': { r: 0, g: 0.42, b: 0.89 }
        };

        const width = props.width ?? (isMobile ? 375 : 1680);
        const paddingLeft = isMobile ? 12 : 24;
        const paddingRight = isMobile ? 12 : 24;
        const containerHeight = isMobile ? 32 : 54;

        const bookingLogoWidth = isMobile ? 80 : 120;
        const marketingIconWidth = isMobile ? 4 : 6;
        const marketingIconHeight = isMobile ? 8 : 12;
        const marketingIconSvg = isMobile ?
            `<svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 1L1 4L3 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>` :
            `<svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 1L1 6L5 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

        const rightLogoContent: NodeDefinition = {
            "type": "COMPONENT",
            "name": "BookingLogo",
            "component": BookingLogo_color,
            "props": { "variant": logoVariant },
            "layoutProps": { "parentIsAutoLayout": true, "width": bookingLogoWidth, "height": (bookingLogoWidth / 118) * 20 }
        };

        const brandingChildren: NodeDefinition[] = [];

        if (message) {
            brandingChildren.push({
                "type": "TEXT" as const,
                "name": "Marketing Message",
                "props": {
                    "characters": message,
                    "fontSize": isMobile ? 12 : 14,
                    "fills": [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }],
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
                "counterAxisSizingMode": "FIXED",
                "paddingLeft": isMobile ? 12 : 16,
                "paddingRight": isMobile ? 12 : 16,
                "cornerRadius": logoRadius,
                "strokes": showBorder ? [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "opacity": borderOpacity }] : [],
                "strokeWeight": showBorder ? 1 : 0,
                "fills": showSolidBlueContainer ? [{ "type": "SOLID", "color": colors['booking-light-blue'], "opacity": 1.0 }] :
                    (showFilledContainer ? [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "opacity": 0.24 }] :
                        (showGradientContainer ? [{
                            "type": "GRADIENT_LINEAR",
                            "gradientStops": [
                                { "position": 0, "color": { ...colors['booking-light-blue'], a: 1 } },
                                { "position": 1, "color": { ...colors['euro-blue'], a: 1 } }
                            ],
                            "gradientTransform": [[-1, 0, 1], [0, 1, 0]]
                        }] : []))
            },
            "layoutProps": {
                "parentIsAutoLayout": true,
                "layoutAlign": "STRETCH",
                "height": isMobile ? 32 : 32
            },
            "children": brandingChildren
        };

        // Determine strip fills from backgroundVariant prop
        let stripFills: Paint[] = [];
        if (stripBackground === 'blue-gradient') {
            stripFills = [{
                "type": "GRADIENT_LINEAR",
                "gradientStops": [
                    { "position": 0, "color": { ...colors['booking-light-blue'], a: 1 } },
                    { "position": 1, "color": { ...colors['euro-blue'], a: 1 } }
                ],
                "gradientTransform": [[-1, 0, 1], [0, 1, 0]]
            }];
        } else {
            stripFills = [{ "type": "SOLID", "color": colors[stripBackground] || colors['euro-blue'] }];
        }

        const structure: NodeDefinition = {
            "type": "FRAME" as const,
            "name": "SponsorStrip",
            "props": {
                "layoutMode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "FIXED",
                "paddingTop": (containerHeight - 32) / 2,
                "paddingRight": paddingRight,
                "paddingBottom": (containerHeight - 32) / 2,
                "paddingLeft": paddingLeft,
                "primaryAxisAlignItems": pillAlignment === 'right' ? "MAX" : "CENTER",
                "counterAxisAlignItems": "CENTER",
                "fills": stripFills,
                "cornerRadius": 0
            },
            "layoutProps": {
                "width": width,
                "height": containerHeight,
                "parentIsAutoLayout": false,
                ...((props as ComponentProps).layoutProps || {})
            },
            "children": [brandingPill]
        } as NodeDefinition;

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

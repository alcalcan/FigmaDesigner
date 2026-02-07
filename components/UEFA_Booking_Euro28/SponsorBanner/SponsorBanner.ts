import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { BookingLogo_color } from "../BookingLogo_color/BookingLogo_color";

export interface SponsorBannerProps extends ComponentProps {
    platform?: 'desktop' | 'mobile';
    logoVariant?: 'color' | 'white';
    message?: string;
    showMarketingIcon?: boolean;
    // We enforce the look, but allow props for flexibility if needed later
    logoRadius?: number;
    borderOpacity?: number;
    fillOpacity?: number;
    variant?: 'standard' | 'double' | 'large';
}

export class SponsorBanner extends BaseComponent {
    async create(props: SponsorBannerProps): Promise<SceneNode> {
        const isMobile = props.platform === 'mobile';
        const logoVariant = props.logoVariant || 'white';
        const message = props.message;
        const showMarketingIcon = props.showMarketingIcon ?? true; // Default to showing icon if message present
        const logoRadius = props.logoRadius ?? 24;
        const borderOpacity = props.borderOpacity ?? 0.4;
        const fillOpacity = props.fillOpacity ?? 0;

        // Banner specific fixed colors
        const stripBackgroundColor = { r: 0.04, g: 0.05, b: 0.28 }; // Dark Blue #0A0D47

        // Dimensions matching Nav_Booking_28_Demo but updated per feedback
        const width = props.width ?? (isMobile ? 375 : 1680);

        // Feedback: Desktop 90px height. Mobile 48px height.
        // Feedback: Main strip padding is 8 top bottom.
        const containerHeight = isMobile ? 48 : 90;
        const verticalPaddingTop = isMobile ? 4 : 8;
        const verticalPaddingBottom = isMobile ? 4 : 8;
        const horizontalPadding = isMobile ? 12 : 24;

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
        const variant = props.variant || 'standard';

        if (variant === 'large' && message) {
            brandingChildren.push({
                "type": "TEXT" as const,
                "name": "Marketing Message",
                "props": {
                    "characters": message,
                    "fontSize": 24,
                    "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }],
                    "font": { "family": "Manrope", "style": "Bold" },
                    "textAutoResize": "WIDTH_AND_HEIGHT"
                },
                "layoutProps": { "parentIsAutoLayout": true }
            });

            brandingChildren.push({
                "type": "FRAME" as const,
                "name": "Logo Group",
                "props": {
                    "layoutMode": "HORIZONTAL",
                    "itemSpacing": 12,
                    "counterAxisAlignItems": "CENTER",
                    "counterAxisSizingMode": "AUTO",
                    "paddingTop": isMobile ? 0 : 8,
                    "fills": []
                },
                "layoutProps": { "parentIsAutoLayout": true },
                "children": [
                    {
                        "type": "VECTOR" as const,
                        "name": "Marketing Icon",
                        "layoutProps": { "width": 6, "height": 12, "parentIsAutoLayout": true },
                        "svgContent": marketingIconSvg // Using desktop SVG for large variant
                    },
                    rightLogoContent
                ]
            });
        } else if (variant === 'double' && message) {
            const lines = message.split('\n');
            const line1 = lines[0] || "";
            const line2 = lines[1] || "";

            brandingChildren.push({
                "type": "FRAME" as const,
                "name": "Text Group",
                "props": {
                    "layoutMode": "VERTICAL",
                    "itemSpacing": 0,
                    "primaryAxisSizingMode": "AUTO",
                    "counterAxisSizingMode": "AUTO",
                    "counterAxisAlignItems": "MIN",
                    "fills": []
                },
                "layoutProps": { "parentIsAutoLayout": true },
                "children": [
                    {
                        "type": "TEXT" as const,
                        "name": "Marketing Message Line 1",
                        "props": {
                            "characters": line1,
                            "fontSize": isMobile ? 18 : 24,
                            "textAutoResize": "WIDTH_AND_HEIGHT",
                            "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }],
                            "font": { "family": "Manrope", "style": "Bold" }
                        },
                        "layoutProps": { "parentIsAutoLayout": true }
                    },
                    {
                        "type": "TEXT" as const,
                        "name": "Marketing Message Line 2",
                        "props": {
                            "characters": line2,
                            "fontSize": isMobile ? 14 : 20,
                            "textAutoResize": "WIDTH_AND_HEIGHT",
                            "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }],
                            "font": { "family": "Manrope", "style": "Light" }
                        },
                        "layoutProps": { "parentIsAutoLayout": true }
                    }
                ]
            });

            brandingChildren.push({
                "type": "FRAME" as const,
                "name": "Logo Group",
                "props": {
                    "layoutMode": "HORIZONTAL",
                    "itemSpacing": 16,
                    "counterAxisAlignItems": "CENTER",
                    "counterAxisSizingMode": "AUTO",
                    "paddingTop": isMobile ? 0 : 8,
                    "fills": []
                },
                "layoutProps": { "parentIsAutoLayout": true },
                "children": [
                    {
                        "type": "VECTOR" as const,
                        "name": "Marketing Icon",
                        "layoutProps": { "width": marketingIconWidth, "height": marketingIconHeight, "parentIsAutoLayout": true },
                        "svgContent": marketingIconSvg
                    },
                    rightLogoContent
                ]
            });
        } else {
            // Standard Layout
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
        }

        // Feedback: "Width 960" for Desktop Pill. Mobile "full width".
        // Feedback: "Less roundness... 24" -> logoRadius defaults to 24.
        const brandingPill: NodeDefinition = {
            "type": "FRAME" as const,
            "name": "Branding Pill",
            "props": {
                "layoutMode": "HORIZONTAL",
                "itemSpacing": (variant === 'large') ? 12 : ((variant === 'double') ? 24 : (isMobile ? 8 : 12)),
                "counterAxisAlignItems": "CENTER",
                "primaryAxisAlignItems": "CENTER", // Content centered inside pill
                "primaryAxisSizingMode": (isMobile && variant !== 'large') ? "AUTO" : "FIXED", // Fixed 960 on desktop/large per feedback
                "counterAxisSizingMode": (variant === 'large') ? "FIXED" : "AUTO", // Fixed 74 on large per snippet

                // Paddings inside the pill
                "paddingLeft": isMobile ? 12 : 16,
                "paddingRight": isMobile ? 12 : 16,
                "paddingTop": isMobile ? 0 : 0,

                "cornerRadius": isMobile ? 8 : 16, // Revised to 16 (desktop) / 8 (mobile) per feedback
                "strokes": [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "opacity": borderOpacity }],
                "strokeWeight": 1,
                "fills": [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "opacity": fillOpacity }]
            },
            "layoutProps": {
                "parentIsAutoLayout": true,
                "layoutAlign": "STRETCH", // Stretch vertically to fill the container height (minus padding)
                "layoutGrow": isMobile ? 1 : 0, // Mobile: Fill Width. Desktop: Fixed Width (Grow 0).
                "width": isMobile ? undefined : 960 // Desktop: Fixed 960px
            },
            "children": brandingChildren
        };

        const structure: NodeDefinition = {
            "type": "FRAME" as const,
            "name": "SponsorBanner",
            "props": {
                "layoutMode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "FIXED",
                "paddingTop": verticalPaddingTop,
                "paddingRight": horizontalPadding,
                "paddingBottom": verticalPaddingBottom,
                "paddingLeft": horizontalPadding,
                "primaryAxisAlignItems": "CENTER", // Center the pill within the strip
                "counterAxisAlignItems": "CENTER",
                "fills": [{ "type": "SOLID", "color": stripBackgroundColor }],
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

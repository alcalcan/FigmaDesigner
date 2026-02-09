import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import IMG_img_0004_png from "./assets/img_0004.png";
import IMG_img_0005_png from "./assets/img_0005.png";

export class PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_008 extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_008";
        slide.resize(1280, 720);
        slide.x = props.x ?? 0;
        slide.y = props.y ?? 0;


        slide.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0.294 }, opacity: 1 }];

        const fontsToLoad: FontName[] = [
            { family: "Inter", style: "Regular" },
            { family: "Europa Nuova Extra Bold", style: "Regular" },
            { family: "Europa Nuova", style: "Regular" },
            { family: "Europa Nuova Bold", style: "Regular" },
        ];
        for (const font of fontsToLoad) {
            try {
                await figma.loadFontAsync(font);
            } catch (_fontErr) {
                // Keep going with fallback fonts when unavailable.
            }
        }
        const text_1 = figma.createText();
        text_1.name = "Text_1";
        const text_1_font: FontName = { family: "Inter", style: "Regular" };
        try {
            text_1.fontName = text_1_font;
        } catch (_fontApplyErr) {
            // Keep fallback font when requested font style is unavailable.
        }
        text_1.characters = "Title";
        text_1.x = 72.567;
        text_1.y = 141.607;
        text_1.resize(354.049, 492.448);
        text_1.textAutoResize = "NONE";
        try {
            text_1.setRangeFontName(0, 5, { family: "Inter", style: "Regular" });
        } catch (_runFontErr) {}
        text_1.textAlignVertical = "TOP";
        slide.appendChild(text_1);
        
        const text_2 = figma.createText();
        text_2.name = "Text_2";
        const text_2_font: FontName = { family: "Inter", style: "Regular" };
        try {
            text_2.fontName = text_2_font;
        } catch (_fontApplyErr) {
            // Keep fallback font when requested font style is unavailable.
        }
        text_2.characters = "Section title";
        text_2.x = 72.567;
        text_2.y = 70.759;
        text_2.resize(906.633, 19.388);
        text_2.textAutoResize = "NONE";
        try {
            text_2.setRangeFontName(0, 13, { family: "Inter", style: "Regular" });
        } catch (_runFontErr) {}
        slide.appendChild(text_2);
        
        const text_3 = figma.createText();
        text_3.name = "Text_3";
        const text_3_font: FontName = { family: "Inter", style: "Regular" };
        try {
            text_3.fontName = text_3_font;
        } catch (_fontApplyErr) {
            // Keep fallback font when requested font style is unavailable.
        }
        text_3.characters = "Topic";
        text_3.x = 72.567;
        text_3.y = 93.138;
        text_3.resize(906.633, 19.388);
        text_3.textAutoResize = "NONE";
        try {
            text_3.setRangeFontName(0, 5, { family: "Inter", style: "Regular" });
        } catch (_runFontErr) {}
        slide.appendChild(text_3);
        
        const text_4 = figma.createText();
        text_4.name = "Text_4";
        const text_4_font: FontName = { family: "Inter", style: "Regular" };
        try {
            text_4.fontName = text_4_font;
        } catch (_fontApplyErr) {
            // Keep fallback font when requested font style is unavailable.
        }
        text_4.characters = "Description";
        text_4.x = 455;
        text_4.y = 144.833;
        text_4.resize(752.5, 489.167);
        text_4.textAutoResize = "NONE";
        try {
            text_4.setRangeFontName(0, 11, { family: "Inter", style: "Regular" });
        } catch (_runFontErr) {}
        slide.appendChild(text_4);
        
        const text_5 = figma.createText();
        text_5.name = "Text_5";
        const text_5_font: FontName = { family: "Europa Nuova Extra Bold", style: "Regular" };
        try {
            text_5.fontName = text_5_font;
        } catch (_fontApplyErr) {
            // Keep fallback font when requested font style is unavailable.
        }
        text_5.characters = "Option B.\nLeaderboard";
        text_5.x = 72.567;
        text_5.y = 141.607;
        text_5.resize(404.803, 100.128);
        text_5.textAutoResize = "NONE";
        text_5.setRangeFills(0, 9, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_5.setRangeFontName(0, 9, { family: "Europa Nuova Extra Bold", style: "Regular" });
            text_5.setRangeFontSize(0, 9, 32);
        } catch (_runFontErr) {}
        text_5.setRangeFills(10, 21, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_5.setRangeFontName(10, 21, { family: "Europa Nuova Extra Bold", style: "Regular" });
            text_5.setRangeFontSize(10, 21, 32);
        } catch (_runFontErr) {}
        slide.appendChild(text_5);
        
        const text_6 = figma.createText();
        text_6.name = "Text_6";
        const text_6_font: FontName = { family: "Europa Nuova", style: "Regular" };
        try {
            text_6.fontName = text_6_font;
        } catch (_fontApplyErr) {
            // Keep fallback font when requested font style is unavailable.
        }
        text_6.characters = "Booking.com branding in Secutix ticketing portal";
        text_6.x = 72.567;
        text_6.y = 70.759;
        text_6.resize(906.633, 19.388);
        text_6.textAutoResize = "NONE";
        text_6.setRangeFills(0, 11, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_6.setRangeFontName(0, 11, { family: "Europa Nuova", style: "Regular" });
            text_6.setRangeFontSize(0, 11, 28);
        } catch (_runFontErr) {}
        text_6.setRangeFills(11, 24, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_6.setRangeFontName(11, 24, { family: "Europa Nuova", style: "Regular" });
            text_6.setRangeFontSize(11, 24, 28);
        } catch (_runFontErr) {}
        text_6.setRangeFills(24, 31, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_6.setRangeFontName(24, 31, { family: "Europa Nuova", style: "Regular" });
            text_6.setRangeFontSize(24, 31, 28);
        } catch (_runFontErr) {}
        text_6.setRangeFills(31, 48, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_6.setRangeFontName(31, 48, { family: "Europa Nuova", style: "Regular" });
            text_6.setRangeFontSize(31, 48, 28);
        } catch (_runFontErr) {}
        text_6.textAlignVertical = "TOP";
        slide.appendChild(text_6);
        
        // Detect image type and create corresponding Figma node
        const image_7_raw = IMG_img_0004_png;
        const image_7_str = (typeof image_7_raw === 'string') ? image_7_raw : (image_7_raw as any).default;
        let image_7;
        
        if (image_7_str && image_7_str.trim().startsWith('<svg')) {
            // SVG Vector Asset
            image_7 = figma.createNodeFromSvg(image_7_str);
            image_7.name = "Image_7";
            image_7.resize(1007.016, 584.64);
            image_7.x = 550.47;
            image_7.y = 64.601;
        } else {
            // Raster Image Asset
            image_7 = figma.createRectangle();
            image_7.name = "Image_7";
            image_7.resize(1007.016, 584.64);
            image_7.x = 550.47;
            image_7.y = 64.601;
            const image_7_data = base64ToUint8Array(image_7_str);
            if (image_7_data.length > 0) {
                const image_7_hash = figma.createImage(image_7_data).hash;
                image_7.fills = [{ type: "IMAGE", imageHash: image_7_hash, scaleMode: "FILL" }];
            }
        }
        slide.appendChild(image_7);
        
        // Detect image type and create corresponding Figma node
        const image_8_raw = IMG_img_0005_png;
        const image_8_str = (typeof image_8_raw === 'string') ? image_8_raw : (image_8_raw as any).default;
        let image_8;
        
        if (image_8_str && image_8_str.trim().startsWith('<svg')) {
            // SVG Vector Asset
            image_8 = figma.createNodeFromSvg(image_8_str);
            image_8.name = "Image_8";
            image_8.resize(215.62, 435.84);
            image_8.x = 525.883;
            image_8.y = 213.744;
        } else {
            // Raster Image Asset
            image_8 = figma.createRectangle();
            image_8.name = "Image_8";
            image_8.resize(215.62, 435.84);
            image_8.x = 525.883;
            image_8.y = 213.744;
            const image_8_data = base64ToUint8Array(image_8_str);
            if (image_8_data.length > 0) {
                const image_8_hash = figma.createImage(image_8_data).hash;
                image_8.fills = [{ type: "IMAGE", imageHash: image_8_hash, scaleMode: "FILL" }];
            }
        }
        slide.appendChild(image_8);
        
        const text_9 = figma.createText();
        text_9.name = "Text_9";
        const text_9_font: FontName = { family: "Europa Nuova Bold", style: "Regular" };
        try {
            text_9.fontName = text_9_font;
        } catch (_fontApplyErr) {
            // Keep fallback font when requested font style is unavailable.
        }
        text_9.characters = "Pro: maximum visual impact and branding space.\nCons: not sticky (disappears as the user scrolls down).\n\nRationale: users scroll when they’re interested in the content. Fear of losing vertical height is an outdated UX concept. On the most common screen resolutions, this strip does not block functional areas.\n";
        text_9.x = 68.978;
        text_9.y = 260.655;
        text_9.resize(408.392, 435.497);
        text_9.textAutoResize = "NONE";
        try {
            text_9.setRangeFontName(0, 5, { family: "Europa Nuova Bold", style: "Regular" });
            text_9.setRangeFontSize(0, 5, 16);
        } catch (_runFontErr) {}
        try {
            text_9.setRangeFontName(5, 47, { family: "Europa Nuova Bold", style: "Regular" });
            text_9.setRangeFontSize(5, 47, 16);
        } catch (_runFontErr) {}
        try {
            text_9.setRangeFontName(47, 53, { family: "Europa Nuova Bold", style: "Regular" });
            text_9.setRangeFontSize(47, 53, 16);
        } catch (_runFontErr) {}
        try {
            text_9.setRangeFontName(53, 104, { family: "Europa Nuova Bold", style: "Regular" });
            text_9.setRangeFontSize(53, 104, 16);
        } catch (_runFontErr) {}
        try {
            text_9.setRangeFontName(104, 115, { family: "Europa Nuova Bold", style: "Regular" });
            text_9.setRangeFontSize(104, 115, 16);
        } catch (_runFontErr) {}
        try {
            text_9.setRangeFontName(115, 309, { family: "Europa Nuova Bold", style: "Regular" });
            text_9.setRangeFontSize(115, 309, 16);
        } catch (_runFontErr) {}
        text_9.textAlignVertical = "TOP";
        slide.appendChild(text_9);

        return slide;
    }
}

function base64ToUint8Array(base64: string): Uint8Array {
    if (!base64) return new Uint8Array(0);
    
    // Strip data URI prefix if present
    let raw = base64;
    if (raw.includes(',')) {
        raw = raw.split(',')[1];
    }
    
    // Check for "default" wrapper again just in case stringification kept it
    if (raw.includes('[object Object]')) {
        console.error("PPT Import: Received [object Object] instead of base64 string.");
        return new Uint8Array(0);
    }
    
    // Aggressive cleanup: Remove anything that is NOT a valid base64 character
    // This handles whitespace, newlines, quotes, and hidden control characters.
    // We also allow URL-safe chars (- and _) and replace them later.
    raw = raw.replace(/[^A-Za-z0-9+/=-_]/g, '');
    
    // Normalize URL-safe base64 to standard
    raw = raw.replace(/-/g, '+').replace(/_/g, '/');

    // Add padding if missing
    while (raw.length % 4 !== 0) {
        raw += '=';
    }

    try {
        return figma.base64Decode(raw);
    } catch (e) {
        console.warn("PPT Import: figma.base64Decode failed, trying legacy cleanup and atob...", e);
        try {
             // Fallback: manual decoding similar to polyfill
            const binaryString = atob(raw);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes;
        } catch (e2) {
            console.error("PPT Import: Failed to decode base64 image data (both methods).", e2);
            console.error("PPT Import: Invalid Raw String (first 100 chars):", raw.substring(0, 100));
            return new Uint8Array(0);
        }
    }
}

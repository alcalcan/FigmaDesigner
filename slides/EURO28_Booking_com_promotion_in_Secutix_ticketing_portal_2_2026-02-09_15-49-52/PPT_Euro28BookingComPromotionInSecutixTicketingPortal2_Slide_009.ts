import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import IMG_img_0004_png from "./assets/img_0004.png";
import IMG_img_0005_png from "./assets/img_0005.png";

export class PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_009 extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_009";
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
        
        // Detect image type and create corresponding Figma node
        const image_5_raw = IMG_img_0004_png;
        const image_5_str = (typeof image_5_raw === 'string') ? image_5_raw : (image_5_raw as any).default;
        let image_5;
        
        if (image_5_str && image_5_str.trim().startsWith('<svg')) {
            // SVG Vector Asset
            image_5 = figma.createNodeFromSvg(image_5_str);
            image_5.name = "Image_5";
            image_5.resize(1088.041, 631.68);
            image_5.x = 138.781;
            image_5.y = 44.16;
        } else {
            // Raster Image Asset
            image_5 = figma.createRectangle();
            image_5.name = "Image_5";
            image_5.resize(1088.041, 631.68);
            image_5.x = 138.781;
            image_5.y = 44.16;
            const image_5_data = base64ToUint8Array(image_5_str);
            if (image_5_data.length > 0) {
                const image_5_hash = figma.createImage(image_5_data).hash;
                image_5.fills = [{ type: "IMAGE", imageHash: image_5_hash, scaleMode: "FILL" }];
            }
        }
        slide.appendChild(image_5);
        
        // Detect image type and create corresponding Figma node
        const image_6_raw = IMG_img_0005_png;
        const image_6_str = (typeof image_6_raw === 'string') ? image_6_raw : (image_6_raw as any).default;
        let image_6;
        
        if (image_6_str && image_6_str.trim().startsWith('<svg')) {
            // SVG Vector Asset
            image_6 = figma.createNodeFromSvg(image_6_str);
            image_6.name = "Image_6";
            image_6.resize(232.717, 470.4);
            image_6.x = 111.874;
            image_6.y = 204.85;
        } else {
            // Raster Image Asset
            image_6 = figma.createRectangle();
            image_6.name = "Image_6";
            image_6.resize(232.717, 470.4);
            image_6.x = 111.874;
            image_6.y = 204.85;
            const image_6_data = base64ToUint8Array(image_6_str);
            if (image_6_data.length > 0) {
                const image_6_hash = figma.createImage(image_6_data).hash;
                image_6.fills = [{ type: "IMAGE", imageHash: image_6_hash, scaleMode: "FILL" }];
            }
        }
        slide.appendChild(image_6);
        
        const text_7 = figma.createText();
        text_7.name = "Text_7";
        const text_7_font: FontName = { family: "Europa Nuova Extra Bold", style: "Regular" };
        try {
            text_7.fontName = text_7_font;
        } catch (_fontApplyErr) {
            // Keep fallback font when requested font style is unavailable.
        }
        text_7.characters = "Option B.\nLarge leaderboard";
        text_7.x = -421.472;
        text_7.y = 141.607;
        text_7.resize(404.803, 100.128);
        text_7.textAutoResize = "NONE";
        text_7.setRangeFills(0, 9, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_7.setRangeFontName(0, 9, { family: "Europa Nuova Extra Bold", style: "Regular" });
            text_7.setRangeFontSize(0, 9, 32);
        } catch (_runFontErr) {}
        text_7.setRangeFills(10, 27, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_7.setRangeFontName(10, 27, { family: "Europa Nuova Extra Bold", style: "Regular" });
            text_7.setRangeFontSize(10, 27, 32);
        } catch (_runFontErr) {}
        slide.appendChild(text_7);
        
        const text_8 = figma.createText();
        text_8.name = "Text_8";
        const text_8_font: FontName = { family: "Europa Nuova", style: "Regular" };
        try {
            text_8.fontName = text_8_font;
        } catch (_fontApplyErr) {
            // Keep fallback font when requested font style is unavailable.
        }
        text_8.characters = "Booking.com branding in Secutix ticketing portal";
        text_8.x = -421.472;
        text_8.y = 70.759;
        text_8.resize(906.633, 19.388);
        text_8.textAutoResize = "NONE";
        text_8.setRangeFills(0, 11, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_8.setRangeFontName(0, 11, { family: "Europa Nuova", style: "Regular" });
            text_8.setRangeFontSize(0, 11, 28);
        } catch (_runFontErr) {}
        text_8.setRangeFills(11, 24, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_8.setRangeFontName(11, 24, { family: "Europa Nuova", style: "Regular" });
            text_8.setRangeFontSize(11, 24, 28);
        } catch (_runFontErr) {}
        text_8.setRangeFills(24, 31, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_8.setRangeFontName(24, 31, { family: "Europa Nuova", style: "Regular" });
            text_8.setRangeFontSize(24, 31, 28);
        } catch (_runFontErr) {}
        text_8.setRangeFills(31, 48, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_8.setRangeFontName(31, 48, { family: "Europa Nuova", style: "Regular" });
            text_8.setRangeFontSize(31, 48, 28);
        } catch (_runFontErr) {}
        text_8.textAlignVertical = "TOP";
        slide.appendChild(text_8);
        
        const text_9 = figma.createText();
        text_9.name = "Text_9";
        const text_9_font: FontName = { family: "Europa Nuova Bold", style: "Regular" };
        try {
            text_9.fontName = text_9_font;
        } catch (_fontApplyErr) {
            // Keep fallback font when requested font style is unavailable.
        }
        text_9.characters = "Pro: maximum visual impact and branding space.\nCons: not sticky (disappears as the user scrolls down).\n\nRationale: users scroll when they’re interested in the content. Fear of losing vertical height is an outdated UX concept. On the most common screen resolutions, this strip does not block functional areas.\n";
        text_9.x = -425.061;
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

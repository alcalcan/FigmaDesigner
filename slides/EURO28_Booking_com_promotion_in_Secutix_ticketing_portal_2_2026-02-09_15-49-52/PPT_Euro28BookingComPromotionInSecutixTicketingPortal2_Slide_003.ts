import { BaseComponent, ComponentProps } from "../../components/BaseComponent";

export class PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_003 extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_003";
        slide.resize(1280, 720);
        slide.x = props.x ?? 0;
        slide.y = props.y ?? 0;


        slide.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0.294 }, opacity: 1 }];

        const fontsToLoad: FontName[] = [
            { family: "Inter", style: "Regular" },
            { family: "Europa Nuova", style: "Regular" },
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
        const text_5_font: FontName = { family: "Europa Nuova", style: "Regular" };
        try {
            text_5.fontName = text_5_font;
        } catch (_fontApplyErr) {
            // Keep fallback font when requested font style is unavailable.
        }
        text_5.characters = "Booking.com branding in Secutix ticketing portal";
        text_5.x = 72.567;
        text_5.y = 70.759;
        text_5.resize(906.633, 19.388);
        text_5.textAutoResize = "NONE";
        text_5.setRangeFills(0, 11, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_5.setRangeFontName(0, 11, { family: "Europa Nuova", style: "Regular" });
            text_5.setRangeFontSize(0, 11, 28);
        } catch (_runFontErr) {}
        text_5.setRangeFills(11, 24, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_5.setRangeFontName(11, 24, { family: "Europa Nuova", style: "Regular" });
            text_5.setRangeFontSize(11, 24, 28);
        } catch (_runFontErr) {}
        text_5.setRangeFills(24, 31, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_5.setRangeFontName(24, 31, { family: "Europa Nuova", style: "Regular" });
            text_5.setRangeFontSize(24, 31, 28);
        } catch (_runFontErr) {}
        text_5.setRangeFills(31, 48, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_5.setRangeFontName(31, 48, { family: "Europa Nuova", style: "Regular" });
            text_5.setRangeFontSize(31, 48, 28);
        } catch (_runFontErr) {}
        text_5.textAlignVertical = "TOP";
        slide.appendChild(text_5);

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

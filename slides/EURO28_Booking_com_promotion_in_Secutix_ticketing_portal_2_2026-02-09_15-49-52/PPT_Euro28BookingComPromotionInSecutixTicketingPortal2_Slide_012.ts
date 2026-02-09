import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import IMG_img_0001_svg from "./assets/img_0001.svg";

export class PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_012 extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_012";
        slide.resize(1280, 720);
        slide.x = props.x ?? 0;
        slide.y = props.y ?? 0;


        slide.fills = [{ type: "SOLID", color: { r: 0.051, g: 0.227, b: 1 }, opacity: 1 }];

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
        text_1.characters = "Divider title";
        text_1.x = 72.567;
        text_1.y = 502.075;
        text_1.resize(1094.412, 129.25);
        text_1.textAutoResize = "NONE";
        try {
            text_1.setRangeFontName(0, 13, { family: "Inter", style: "Regular" });
        } catch (_runFontErr) {}
        text_1.textAlignVertical = "BOTTOM";
        slide.appendChild(text_1);
        
        // Detect image type and create corresponding Figma node
        const image_2_raw = IMG_img_0001_svg;
        const image_2_str = (typeof image_2_raw === 'string') ? image_2_raw : (image_2_raw as any).default;
        let image_2;
        
        if (image_2_str && image_2_str.trim().startsWith('<svg')) {
            // SVG Vector Asset
            image_2 = figma.createNodeFromSvg(image_2_str);
            image_2.name = "Image_2";
            image_2.resize(755.583, 744.063);
            image_2.x = 585.248;
            image_2.y = 168.781;
        } else {
            // Raster Image Asset
            image_2 = figma.createRectangle();
            image_2.name = "Image_2";
            image_2.resize(755.583, 744.063);
            image_2.x = 585.248;
            image_2.y = 168.781;
            const image_2_data = base64ToUint8Array(image_2_str);
            if (image_2_data.length > 0) {
                const image_2_hash = figma.createImage(image_2_data).hash;
                image_2.fills = [{ type: "IMAGE", imageHash: image_2_hash, scaleMode: "FILL" }];
            }
        }
        image_2.opacity = 0.15;
        slide.appendChild(image_2);
        
        const text_3 = figma.createText();
        text_3.name = "Text_3";
        const text_3_font: FontName = { family: "Europa Nuova", style: "Regular" };
        try {
            text_3.fontName = text_3_font;
        } catch (_fontApplyErr) {
            // Keep fallback font when requested font style is unavailable.
        }
        text_3.characters = "INFORMATION, COMMUNICATION & TECHNOLOGY";
        text_3.x = 846.919;
        text_3.y = 72.574;
        text_3.resize(323.031, 25.165);
        text_3.textAutoResize = "NONE";
        text_3.setRangeFills(0, 39, [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]);
        try {
            text_3.setRangeFontName(0, 39, { family: "Europa Nuova", style: "Regular" });
            text_3.setRangeFontSize(0, 39, 9);
        } catch (_runFontErr) {}
        text_3.textAlignHorizontal = "RIGHT";
        slide.appendChild(text_3);
        
        // Detect image type and create corresponding Figma node
        const image_4_raw = IMG_img_0001_svg;
        const image_4_str = (typeof image_4_raw === 'string') ? image_4_raw : (image_4_raw as any).default;
        let image_4;
        
        if (image_4_str && image_4_str.trim().startsWith('<svg')) {
            // SVG Vector Asset
            image_4 = figma.createNodeFromSvg(image_4_str);
            image_4.name = "Image_4";
            image_4.resize(40.063, 40.063);
            image_4.x = 1174.688;
            image_4.y = 63.181;
        } else {
            // Raster Image Asset
            image_4 = figma.createRectangle();
            image_4.name = "Image_4";
            image_4.resize(40.063, 40.063);
            image_4.x = 1174.688;
            image_4.y = 63.181;
            const image_4_data = base64ToUint8Array(image_4_str);
            if (image_4_data.length > 0) {
                const image_4_hash = figma.createImage(image_4_data).hash;
                image_4.fills = [{ type: "IMAGE", imageHash: image_4_hash, scaleMode: "FILL" }];
            }
        }
        slide.appendChild(image_4);

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

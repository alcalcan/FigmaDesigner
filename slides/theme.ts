export const Colors = {
    BACKGROUND: { r: 0xF1 / 255, g: 0xF3 / 255, b: 0xF8 / 255 },
    ACCENT: { r: 0x0D / 255, g: 0x3A / 255, b: 0xFF / 255 },
    TEXT_MAIN: { r: 0x00 / 255, g: 0x00 / 255, b: 0x4B / 255 },
    TEXT_SECONDARY: { r: 0x80 / 255, g: 0x80 / 255, b: 0x80 / 255 },
    WHITE: { r: 1, g: 1, b: 1 },

    // Semantic Colors
    SUCCESS: { r: 0x00 / 255, g: 0xC8 / 255, b: 0x53 / 255 }, // Green
    WARNING: { r: 0xFF / 255, g: 0xD6 / 255, b: 0x00 / 255 }, // Amber
    DANGER: { r: 0xD5 / 255, g: 0x00 / 255, b: 0x00 / 255 },  // Red

    // Blue Variants
    BLUE_PALE: { r: 0xE3 / 255, g: 0xF2 / 255, b: 0xFD / 255 }, // Very Light Blue
    BLUE_LIGHT: { r: 0x42 / 255, g: 0xA5 / 255, b: 0xF5 / 255 }, // Light Blue
    BLUE_DEEP: { r: 0x00 / 255, g: 0x00 / 255, b: 0x4B / 255 }, // Same as TEXT_MAIN
};

export const Fonts = {
    PRIMARY: { family: "Europa Nuova", style: "Regular" },
    BOLD: { family: "Europa Nuova Bold", style: "Regular" },
    EXTRA_BOLD: { family: "Europa Nuova Extra Bold", style: "Regular" },

    // Font Sizes (Points converted to Pixels roughly 1pt = 1.33px or direct use dependent on Figma)
    // Figma uses 'fontSize' which is close to Points but platform dependent.
    // Standard web: 1pt = 1.333px.
    // However, often users map Pt directly to Figma fontSize for simplicity.
    // Let's stick to the numerical values for now, maybe adjusting if visually off.
    SIZE_TITLE: 28,
    SIZE_NUMBER: 14,
    SIZE_BODY: 14,
    SIZE_FOOTER: 12,

    // Specific for Title Slide
    SIZE_TITLE_MAIN: 44, // From title_slide.py
};

// Layout constants converted from Emu to Pixels
// Conversion: 1 inch = 914400 Emu = 96px (CSS/Figma standard usually)
// Factor: 914400 / 96 = 9525 Emu per Pixel.
const EMU_PER_PX = 9525;
const emuToPx = (emu: number) => emu / EMU_PER_PX;

export const Layout = {
    SLIDE_WIDTH: emuToPx(12192000),  // 1280px
    SLIDE_HEIGHT: emuToPx(6858000),  // 720px

    MARGIN_LEFT: emuToPx(691201),
    MARGIN_TOP_TITLE: emuToPx(1350782),
    MARGIN_TOP_SUBTITLE: emuToPx(720000),
    MARGIN_BOTTOM: emuToPx(6358000),
    MARGIN_FOOTER: emuToPx(500000),

    CONTENT_GAP: emuToPx(500000), // Same as Footer Margin

    // Divided Slide
    DIVIDER_X: emuToPx(6083808),
    MARGIN_RIGHT_DIVIDED: emuToPx(201107),
    MARGIN_LEFT_DIVIDED_RIGHT: emuToPx(201107),

    // Simple Slide
    MARGIN_RIGHT_SIMPLE: emuToPx(691201),

    // Title Slide Specifics (from title_slide.py)
    TITLE_SLIDE: {
        TITLE_LEFT: emuToPx(691202),
        TITLE_TOP: emuToPx(3810000),
        TITLE_WIDTH: emuToPx(7926326),
        TITLE_HEIGHT: emuToPx(2203368),
    }
};

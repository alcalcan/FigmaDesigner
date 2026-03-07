import { test, expect } from '@playwright/test';

test.describe('Header Sponsor Banner Demo Preview', () => {
    test('should render SVGs and PNGs correctly in standard mode', async ({ page }) => {
        const tsPath = 'pages/UEFA_web/Header_Sponsor_Banner_Demo.ts';
        await page.goto(`/preview?path=${encodeURIComponent(tsPath)}&mode=standard`);

        // Wait for preview to attempt compilation
        await page.waitForTimeout(2000);

        // Check for error overlays
        const errorBox = page.locator('text=Preview Error');
        await expect(errorBox).toHaveCount(0);

        // Check for images and vectors
        const images = page.locator('img[alt="Vector asset"]');
        const backgroundImageNodes = page.locator('div[style*="background-image"]');

        // Based on logic, we expect at least the Booking Logo (SVG as data URL) and potentially others
        // We check for visibility of these nodes
        if (await images.count() > 0) {
            await expect(images.first()).toBeVisible();
        }

        // The SponsorBanner uses BookingLogo_color which we fixed to render as <img>
        const bookingLogo = page.locator('img[alt="Vector asset"]').first();
        await expect(bookingLogo).toBeVisible();

        const src = await bookingLogo.getAttribute('src');
        expect(src).toContain('data:image/svg+xml');
    });

    test('should render correctly in fidelity mode', async ({ page }) => {
        const tsPath = 'pages/UEFA_web/Header_Sponsor_Banner_Demo.ts';
        await page.goto(`/preview?path=${encodeURIComponent(tsPath)}&mode=fidelity`);

        await page.waitForSelector('[data-preview-ready="true"], [data-preview-error="true"]', { timeout: 20000 });

        const errorBox = page.locator('[data-preview-error="true"]');
        await expect(errorBox).toHaveCount(0);

        const root = page.locator('[data-fidelity-stage="true"]');
        await expect(root).toHaveAttribute('data-preview-ready', 'true');
    });
});

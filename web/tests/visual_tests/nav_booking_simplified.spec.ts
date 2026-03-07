import { test, expect } from '@playwright/test';

test.describe('Nav Booking Simplified Demo Verification', () => {
    test('should render gradient and border correctly', async ({ page }) => {
        const tsPath = 'pages/UEFA_web/Nav_Booking_Simplified_Demo.ts';
        await page.goto(`/preview?path=${encodeURIComponent(tsPath)}&mode=standard`);

        // Wait for preview to render (should be much faster now)
        await page.waitForTimeout(5000);

        // Check for error overlays
        const errorBox = page.locator('text=Preview Error');
        await expect(errorBox).toHaveCount(0);

        // Check for the branding pill in the gradient variant
        const gradientPill = page.locator('div[data-name="Branding Pill"]').first();
        await expect(gradientPill).toBeVisible();

        const style = await gradientPill.getAttribute('style');

        // Check for linear-gradient (our new feature)
        expect(style).toContain('linear-gradient');

        // Check for corner radius (individual corner mapping)
        expect(style).toContain('border-radius: 24px'); // fallback cornerRadius

        // Check for INSIDE stroke (box-shadow mapping)
        expect(style).toContain('box-shadow: rgba(255, 255, 255, 0.4) 0px 0px 0px 1px inset');

        await page.screenshot({ path: 'simplified_nav_booking_preview.png' });
    });
});

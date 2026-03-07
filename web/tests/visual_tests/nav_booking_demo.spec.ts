import { test, expect } from '@playwright/test';

test.describe('Nav Booking 28 Demo Verification', () => {
    test('should render Nav Booking 28 variants correctly', async ({ page }) => {
        const tsPath = 'pages/UEFA_web/Nav_Booking_28_Demo.ts';
        await page.goto(`/preview?path=${encodeURIComponent(tsPath)}&mode=standard`);

        // Wait for preview to attempt compilation and render
        await page.waitForTimeout(10000);

        // Check for error overlays
        const errorBox = page.locator('text=Preview Error');
        await expect(errorBox).toHaveCount(0);

        // Check for the gradient variant "S4: Bdr+Grad 24"
        // We look for a Variant Item that has a text child with the name, then find its Branding Pill
        const variantItem = page.locator('div.figma-node-frame', { has: page.locator('text="S4: Bdr+Grad 24"') }).first();
        await expect(variantItem).toBeVisible();

        const gradientPill = variantItem.locator('div[data-name="Branding Pill"]');
        await expect(gradientPill).toBeVisible();

        const style = await gradientPill.getAttribute('style');
        expect(style).toContain('linear-gradient');

        // Take a screenshot for manual inspection if needed, but here we just check visibility
        await page.screenshot({ path: 'nav_booking_demo_preview.png', fullPage: true });
        console.log('Screenshot saved to nav_booking_demo_preview.png');
    });
});

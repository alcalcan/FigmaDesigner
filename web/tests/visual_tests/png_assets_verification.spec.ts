import { test, expect } from '@playwright/test';

test.describe('UEFACards PNG Assets Verification', () => {
    test('should render PNG images in cards', async ({ page }) => {
        const tsPath = 'components/UEFA_web/uefa_cards_4x/uefa_cards_4x.ts';
        await page.goto(`/preview?path=${encodeURIComponent(tsPath)}&mode=standard`);

        // Wait for preview to attempt compilation
        await page.waitForTimeout(3000);

        // Check for error overlays
        const errorBox = page.locator('text=Preview Error');
        await expect(errorBox).toHaveCount(0);

        // UefaCards uses IMAGE fills which we handle as background-image in FigmaPreviewRenderer
        const cardImages = page.locator('div[style*="background-image"]');
        await expect(cardImages.first()).toBeVisible();

        const style = await cardImages.first().getAttribute('style');
        expect(style).toContain('url("data:image/png;base64');
    });
});

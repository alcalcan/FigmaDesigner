import { test, expect } from '@playwright/test';

test.describe('Academy Demo Page Preview', () => {
    test('should compile without asset errors in standard mode', async ({ page }) => {
        const tsPath = 'pages/UEFA_Academy/AcademyDemoPage.ts';
        await page.goto(`/preview?path=${encodeURIComponent(tsPath)}&mode=standard`);

        // Wait for preview to attempt compilation
        await page.waitForTimeout(1000);

        // Check for error overlays
        const errorBox = page.locator('text=Preview Error');
        await expect(errorBox).toHaveCount(0);

        // Verify the canvas rendered something
        const rightPanel = page.locator('body');
        await expect(rightPanel).not.toContainText('Compiling', { timeout: 15000 });

        // Ensure no "Failed to read asset" error text appears anywhere
        await expect(rightPanel).not.toContainText('Failed to read asset', { timeout: 5000 });

        const previewNode = page.locator('.figma-node').first();
        await expect(previewNode).toBeVisible();
    });

    test('should compile without asset errors in fidelity mode', async ({ page }) => {
        const tsPath = 'pages/UEFA_Academy/AcademyDemoPage.ts';
        await page.goto(`/preview?path=${encodeURIComponent(tsPath)}&mode=fidelity`);

        await page.waitForSelector('[data-preview-ready="true"], [data-preview-error="true"]', { timeout: 15000 });

        const errorBox = page.locator('[data-preview-error="true"]');
        await expect(errorBox).toHaveCount(0);

        const root = page.locator('[data-fidelity-stage="true"]');
        await expect(root).toHaveAttribute('data-preview-ready', 'true');
    });
});

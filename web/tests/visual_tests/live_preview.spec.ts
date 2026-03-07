import { test, expect } from '@playwright/test';

test.describe('Live Component Preview', () => {
    test('should compile and render a component dynamically in Sidebar View', async ({ page }) => {
        await page.goto('/');
        await page.waitForSelector('.session-column');

        await page.locator('.view-btn').nth(1).click();
        await expect(page.locator('.sidebar-left-column')).toBeVisible();

        const componentsSection = page.locator('.catalog-section').filter({ hasText: 'Components (Auto-Scan)' });

        const preferredFolder = componentsSection.locator('.folder-row', { hasText: 'header_ucl_preview' }).first();
        if (await preferredFolder.count() > 0) {
            await preferredFolder.click({ force: true });
        }

        const preferredLeaf = componentsSection.locator('.leaf-row', { hasText: 'generic_preview_header.ts' }).first();
        const fallbackLeaf = componentsSection.locator('.leaf-row').first();
        if (await preferredLeaf.count() > 0) {
            await preferredLeaf.click({ force: true });
        } else {
            await fallbackLeaf.click({ force: true });
        }

        const rightPanel = page.locator('.sidebar-right-column');
        await expect(rightPanel).toBeVisible();
        await expect(rightPanel).not.toContainText('Compiling', { timeout: 15000 });
        await expect(rightPanel).not.toContainText('Preview Error');

        const previewCanvas = rightPanel.locator('div[style*="zoom"] > *');
        await expect(previewCanvas.first()).toBeVisible();
    });
});

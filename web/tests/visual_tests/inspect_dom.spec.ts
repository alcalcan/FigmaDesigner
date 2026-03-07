import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test('dump DOM of All_Notes', async ({ page }) => {
    await page.goto('http://localhost:3000');

    await page.waitForSelector('.session-column');

    await page.locator('.view-btn').nth(1).click();

    const componentsSection = page.locator('.catalog-section').filter({ hasText: 'Components (Auto-Scan)' });
    const folderLocator = componentsSection.locator('.folder-row', { hasText: 'iris_tree_view_original' });
    if (await folderLocator.isVisible()) {
        await folderLocator.click();
    }

    const componentLocator = componentsSection.locator('.leaf-row', { hasText: 'All_Notes.ts' });
    await componentLocator.click();

    const rightPanel = page.locator('.sidebar-right-column');
    await expect(rightPanel).not.toContainText('Compiling', { timeout: 15000 });

    // Wait for the figma node to appear
    await page.waitForSelector('.figma-node', { timeout: 10000 });
    await page.waitForTimeout(1000);

    await rightPanel.screenshot({ path: 'all_notes_fixed_preview.png' });
});

import { test, expect } from '@playwright/test';

test('dump DOM of All_Notes', async ({ page }) => {
    await page.goto('http://localhost:3000');

    await page.waitForSelector('.session-column');
    await page.locator('.view-btn').nth(1).click();

    const componentsSection = page.locator('.catalog-section').filter({ hasText: 'Components (Auto-Scan)' });

    const projectFolder = componentsSection.locator('.folder-row', { hasText: 'iris_tree_view_original' }).first();
    if (await projectFolder.count() > 0) {
        await projectFolder.click({ force: true });
    }

    const componentFolder = componentsSection.locator('.folder-row', { hasText: 'All_Notes' }).first();
    if (await componentFolder.count() > 0) {
        await componentFolder.click({ force: true });
    }

    const preferredLeaf = componentsSection.locator('.leaf-row', { hasText: 'All_Notes.ts' }).first();
    const fallbackLeaf = componentsSection.locator('.leaf-row').first();
    if (await preferredLeaf.count() > 0) {
        await preferredLeaf.click({ force: true });
    } else {
        await fallbackLeaf.click({ force: true });
    }

    const rightPanel = page.locator('.sidebar-right-column');
    await expect(rightPanel).not.toContainText('Compiling', { timeout: 15000 });

    await page.waitForSelector('.figma-node', { timeout: 10000 });
    await page.waitForTimeout(1000);

    await rightPanel.screenshot({ path: 'all_notes_fixed_preview.png' });
});

import { test, expect } from '@playwright/test';

test.describe('Live Component Preview', () => {
    test('should compile and render a component dynamically in Sidebar View', async ({ page }) => {
        // 1. Navigate to the local Next.js dev server
        await page.goto('/');

        // Ensure the Figma connection warning or main UI is loaded
        await page.waitForSelector('.session-column');

        // 2. Click the 'Sidebar View' button
        // It's the button containing the lucide-react Sidebar icon
        // Using a reliable selector based on class or visual text.
        await page.locator('.view-btn').nth(1).click();

        // 3. Ensure we are in sidebar mode by checking if the sidebar-left-column exists
        await expect(page.locator('.sidebar-left-column')).toBeVisible();

        // 3.5 Locate the Components section explicitly
        const componentsSection = page.locator('.catalog-section').filter({ hasText: 'Components (Auto-Scan)' });

        // 4. Expand "Alex_CookBook" in the Components section
        // Look for the folder label
        const folderLocator = componentsSection.locator('.folder-row', { hasText: 'Alex_CookBook' });
        if (await folderLocator.isVisible()) {
            await folderLocator.click();
        }

        // 5. Click on the accordion.ts component
        const componentLocator = componentsSection.locator('.leaf-row', { hasText: 'accordion.ts' });
        await componentLocator.click();

        // 6. Verify the right sidebar panel state
        const rightPanel = page.locator('.sidebar-right-column');
        await expect(rightPanel).toBeVisible();

        // The LivePreview component initially shows "Compiling [path]..."
        // Wait for the compilation to finish (either Success or Error)
        // If successful, the actual compiled React node is placed inside a div with pointerEvents: none
        // If error, it shows a "Preview Error" h3

        // Give Babel some time to compile (Playwright auto-waits up to 5s by default on assertions)
        await expect(rightPanel).not.toContainText('Compiling', { timeout: 8000 });

        // Assert that we do NOT see a compiler error
        await expect(rightPanel).not.toContainText('Preview Error');

        // Assert that the preview node rendered successfully
        // We expect some inner element inside the zoom wrapper to exist.
        const previewCanvas = rightPanel.locator('div[style*="zoom"] > *');
        await expect(previewCanvas.first()).toBeVisible();
    });
});

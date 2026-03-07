import { expect, test } from '@playwright/test';

test.describe('Fidelity Preview Route', () => {
  test('renders tight-cropped fidelity node without legacy fixed wrapper', async ({ page }) => {
    await page.goto('/preview?path=UEFA_icons/Action___Print/Action___Print.ts&mode=fidelity');

    await page.waitForSelector('[data-preview-ready="true"]', { timeout: 30000 });
    await expect(page.locator('[data-fidelity-root="true"]').first()).toBeVisible();

    // Ensure we are not rendering the legacy fixed 1440x1024 canvas wrapper in fidelity mode.
    await expect(page.locator('div[style*="width: 1440"]')).toHaveCount(0);
    await expect(page.locator('div[style*="height: 1024"]')).toHaveCount(0);
  });
});

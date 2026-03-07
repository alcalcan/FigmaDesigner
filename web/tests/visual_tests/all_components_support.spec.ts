import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Load lists from root directory via process.cwd() or relative to web/tests/visual_tests
const projectRoot = path.resolve(__dirname, '../../..');
const componentsPath = path.join(projectRoot, 'components_api_list.json');
const capturesPath = path.join(projectRoot, 'captures_api_list.json');

let componentsData: { components?: string[], pages?: string[] } = {};
try {
    if (fs.existsSync(componentsPath)) {
        componentsData = JSON.parse(fs.readFileSync(componentsPath, 'utf8'));
    }
} catch (e) {
    console.error('Failed to parse components_api_list.json', e);
}

const isFullRun = process.env.TEST_ALL_COMPONENTS === '1';

const getItemsToTest = (items: string[] = []) => {
    if (isFullRun) return items;
    return items.slice(0, 5); // Smoke test 5 items by default
};

const componentsToTest = getItemsToTest(componentsData.components);
const pagesToTest = getItemsToTest(componentsData.pages);

test.describe('Component Fidelity Support Regressions', () => {

    test.describe('Autocaptured Components', () => {
        for (const compPath of componentsToTest) {
            test(`verifies fidelity support for component: ${compPath}`, async ({ page }) => {
                const fullTsPath = `${compPath}.ts`;

                await page.goto(`/preview?path=${encodeURIComponent(fullTsPath)}&mode=fidelity`);

                // Wait for preview to either mount or error out explicitly
                await page.waitForSelector('[data-preview-ready="true"], [data-preview-error="true"]', { timeout: 15000 });

                // Ensure there is no error box overlay (meaning it's fully supported & compiles)
                const errorBox = page.locator('[data-preview-error="true"]');
                await expect(errorBox).toHaveCount(0);

                // For good measure, ensure the fidelity stage itself is marked as ready
                const root = page.locator('[data-fidelity-stage="true"]');
                await expect(root).toHaveAttribute('data-preview-ready', 'true', { timeout: 1000 });
            });
        }
    });

    test.describe('Autocaptured Pages', () => {
        for (const pagePath of pagesToTest) {
            test(`verifies fidelity support for page: ${pagePath}`, async ({ page }) => {
                // pages path behaves similarly
                const fullTsPath = `${pagePath}.ts`;

                await page.goto(`/preview?path=${encodeURIComponent(fullTsPath)}&mode=fidelity`);

                await page.waitForSelector('[data-preview-ready="true"], [data-preview-error="true"]', { timeout: 20000 });

                const errorBox = page.locator('[data-preview-error="true"]');
                await expect(errorBox).toHaveCount(0);

                const root = page.locator('[data-fidelity-stage="true"]');
                await expect(root).toHaveAttribute('data-preview-ready', 'true', { timeout: 1000 });
            });
        }
    });
});

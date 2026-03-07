import { test, expect } from '@playwright/test';

test.describe('Inspect Nav Booking 28 Demo DOM', () => {
    test('should capture DOM and logs', async ({ page }) => {
        page.on('console', msg => console.log('BROWSER LOG:', msg.text()));

        const tsPath = 'pages/UEFA_web/Nav_Booking_28_Demo.ts';
        await page.goto(`/preview?path=${encodeURIComponent(tsPath)}&mode=standard`);

        // Wait for preview to attempt compilation and render
        await page.waitForTimeout(15000);

        // Log all data-name attributes to see what we have
        const nodes = await page.evaluate(() => {
            const elements = document.querySelectorAll('[data-name]');
            return Array.from(elements).map(el => ({
                name: el.getAttribute('data-name'),
                type: el.className,
                text: el.textContent?.substring(0, 50)
            }));
        });

        console.log('Found nodes with data-name:', nodes);

        const html = await page.content();
        console.log('Full page HTML length:', html.length);

        await page.screenshot({ path: 'inspect_dom_nav_booking.png', fullPage: true });
    });
});

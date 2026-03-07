import fs from 'fs/promises';
import path from 'path';

import { chromium } from '@playwright/test';

import { diffPngFiles } from './parityDiff.mjs';

const parseArgs = () => {
  const raw = process.argv.slice(2);
  const args = {};
  for (let index = 0; index < raw.length; index += 2) {
    const key = raw[index];
    const value = raw[index + 1];
    if (!key || !key.startsWith('--')) continue;
    args[key.slice(2)] = value;
  }
  return args;
};

const main = async () => {
  const args = parseArgs();
  const url = args.url;
  const baselinePath = args.baseline;
  const actualPath = args.actual;
  const diffPath = args.diff;
  const thresholdPercent = Number(args.threshold || '0.1');

  if (!url || !baselinePath || !actualPath || !diffPath) {
    throw new Error('Missing required args: --url --baseline --actual --diff');
  }

  await fs.mkdir(path.dirname(actualPath), { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 2200, height: 2200 } });

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    await page.waitForFunction(() => {
      return Boolean(document.querySelector('[data-preview-ready="true"]') || document.querySelector('[data-preview-error="true"]'));
    }, { timeout: 30_000 });

    const previewError = page.locator('[data-preview-error="true"]');
    if (await previewError.count() > 0) {
      const errorText = await previewError.first().innerText();
      throw new Error(`Preview route reported an error: ${errorText}`);
    }

    const target = page.locator('[data-fidelity-node-root="true"]');
    await target.first().waitFor({ timeout: 15_000 });
    await target.first().screenshot({ path: actualPath });
  } finally {
    await page.close();
    await browser.close();
  }

  const diff = await diffPngFiles({
    baselinePath,
    actualPath,
    diffPath,
    thresholdPercent
  });

  const result = {
    status: 'ok',
    thresholdPercent,
    baselinePath,
    actualPath,
    diffPath,
    ...diff
  };

  process.stdout.write(JSON.stringify(result));
};

main().catch((error) => {
  process.stderr.write(error instanceof Error ? error.stack || error.message : String(error));
  process.exit(1);
});

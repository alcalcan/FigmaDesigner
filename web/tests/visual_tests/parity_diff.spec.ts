import fs from 'fs/promises';
import path from 'path';

import { expect, test } from '@playwright/test';
import { PNG } from 'pngjs';

import { diffPngFiles } from '../../tools/parityDiff.mjs';

const writeSolidPng = async (targetPath: string, width: number, height: number, rgba: [number, number, number, number]) => {
  const png = new PNG({ width, height });
  for (let index = 0; index < width * height; index += 1) {
    const offset = index * 4;
    png.data[offset] = rgba[0];
    png.data[offset + 1] = rgba[1];
    png.data[offset + 2] = rgba[2];
    png.data[offset + 3] = rgba[3];
  }
  await fs.writeFile(targetPath, PNG.sync.write(png));
};

test.describe('Parity Diff Engine', () => {
  test('passes when baseline and actual images are identical', async () => {
    const tempDir = path.join(process.cwd(), 'test-results', 'parity-diff-identical');
    await fs.mkdir(tempDir, { recursive: true });

    const baselinePath = path.join(tempDir, 'baseline.png');
    const actualPath = path.join(tempDir, 'actual.png');
    const diffPath = path.join(tempDir, 'diff.png');

    await writeSolidPng(baselinePath, 10, 10, [255, 255, 255, 255]);
    await writeSolidPng(actualPath, 10, 10, [255, 255, 255, 255]);

    const result = await diffPngFiles({ baselinePath, actualPath, diffPath, thresholdPercent: 0.1 });

    expect(result.mismatchPixels).toBe(0);
    expect(result.mismatchPercent).toBe(0);
    expect(result.passed).toBeTruthy();
  });

  test('fails strict threshold when a visible pixel mismatch exists', async () => {
    const tempDir = path.join(process.cwd(), 'test-results', 'parity-diff-mismatch');
    await fs.mkdir(tempDir, { recursive: true });

    const baselinePath = path.join(tempDir, 'baseline.png');
    const actualPath = path.join(tempDir, 'actual.png');
    const diffPath = path.join(tempDir, 'diff.png');

    const baseline = new PNG({ width: 10, height: 10 });
    const actual = new PNG({ width: 10, height: 10 });

    for (let index = 0; index < 100; index += 1) {
      const offset = index * 4;
      baseline.data[offset] = 0;
      baseline.data[offset + 1] = 0;
      baseline.data[offset + 2] = 0;
      baseline.data[offset + 3] = 255;

      actual.data[offset] = 0;
      actual.data[offset + 1] = 0;
      actual.data[offset + 2] = 0;
      actual.data[offset + 3] = 255;
    }

    // Flip one pixel to white -> 1 / 100 = 1.0% mismatch.
    actual.data[0] = 255;
    actual.data[1] = 255;
    actual.data[2] = 255;
    actual.data[3] = 255;

    await fs.writeFile(baselinePath, PNG.sync.write(baseline));
    await fs.writeFile(actualPath, PNG.sync.write(actual));

    const result = await diffPngFiles({ baselinePath, actualPath, diffPath, thresholdPercent: 0.1 });

    expect(result.mismatchPixels).toBeGreaterThan(0);
    expect(result.mismatchPercent).toBeGreaterThan(0.1);
    expect(result.passed).toBeFalsy();
  });
});

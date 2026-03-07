import fs from 'fs/promises';
import path from 'path';

import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const readPng = async (filePath) => {
  const buffer = await fs.readFile(filePath);
  return PNG.sync.read(buffer);
};

const createCanvas = (width, height) => new PNG({ width, height });

const blit = (source, target, x = 0, y = 0) => {
  PNG.bitblt(source, target, 0, 0, source.width, source.height, x, y);
};

export const diffPngFiles = async ({ baselinePath, actualPath, diffPath, thresholdPercent = 0.1 }) => {
  const baseline = await readPng(baselinePath);
  const actual = await readPng(actualPath);

  const width = Math.max(baseline.width, actual.width);
  const height = Math.max(baseline.height, actual.height);

  const baselineCanvas = createCanvas(width, height);
  const actualCanvas = createCanvas(width, height);
  blit(baseline, baselineCanvas);
  blit(actual, actualCanvas);

  const diff = createCanvas(width, height);

  const mismatchPixels = pixelmatch(
    baselineCanvas.data,
    actualCanvas.data,
    diff.data,
    width,
    height,
    {
      threshold: 0.1,
      includeAA: false,
      alpha: 0.6
    }
  );

  await fs.mkdir(path.dirname(diffPath), { recursive: true });
  await fs.writeFile(diffPath, PNG.sync.write(diff));

  const totalPixels = width * height;
  const mismatchPercent = totalPixels > 0 ? (mismatchPixels / totalPixels) * 100 : 100;
  const passed = mismatchPercent <= thresholdPercent;

  return {
    mismatchPixels,
    totalPixels,
    mismatchPercent,
    passed,
    width,
    height,
    diffPath
  };
};

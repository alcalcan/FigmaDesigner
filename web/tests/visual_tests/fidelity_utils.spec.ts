import { test, expect } from '@playwright/test';

import {
  cssMatrixFromFigmaTransform,
  imageFillToCss,
  linearGradientFillToCss,
  parseFontStyleToCss,
  toFontCacheKey
} from '../../app/fidelityUtils';

test('cssMatrixFromFigmaTransform maps to CSS matrix order', () => {
  const css = cssMatrixFromFigmaTransform([[1, 2, 3], [4, 5, 6]]);
  expect(css).toBe('matrix(1, 4, 2, 5, 3, 6)');
});

test('linearGradientFillToCss returns a usable linear-gradient string', () => {
  const css = linearGradientFillToCss({
    type: 'GRADIENT_LINEAR',
    gradientStops: [
      { color: { r: 1, g: 0, b: 0, a: 1 }, position: 0 },
      { color: { r: 0, g: 0, b: 1, a: 1 }, position: 1 }
    ],
    gradientTransform: [[1, 0, 0], [0, 1, 0]],
    opacity: 1
  });

  expect(css).toContain('linear-gradient(');
  expect(css).toContain('rgba(255, 0, 0, 1)');
  expect(css).toContain('rgba(0, 0, 255, 1)');
});

test('imageFillToCss maps IMAGE fill metadata to CSS background settings', () => {
  const css = imageFillToCss({ type: 'IMAGE', scaleMode: 'FIT', assetRef: 'data:image/png;base64,abc' });
  expect(css.backgroundImage).toContain('data:image/png;base64,abc');
  expect(css.backgroundSize).toBe('contain');
  expect(css.backgroundRepeat).toBe('no-repeat');
});

test('font style parser and cache key normalizer are deterministic', () => {
  const parsed = parseFontStyleToCss('SemiBold Italic');
  expect(parsed.weight).toBe(600);
  expect(parsed.style).toBe('italic');

  const key = toFontCacheKey(' Open Sans ', 'Regular');
  expect(key).toBe('open sans::regular');
});

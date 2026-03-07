import type { CSSProperties } from 'react';

export type FigmaMatrix = [[number, number, number], [number, number, number]];

export type FigmaColor = { r: number; g: number; b: number; a?: number };

export type GradientStop = {
  color: FigmaColor;
  position: number;
};

export type LinearGradientFill = {
  type: 'GRADIENT_LINEAR';
  gradientStops?: GradientStop[];
  gradientTransform?: FigmaMatrix;
  opacity?: number;
};

export type ImageFill = {
  type: 'IMAGE';
  scaleMode?: 'FILL' | 'FIT' | 'CROP' | 'TILE';
  assetRef?: string;
};

const O: number[][] = [
  [0, 1, 0],
  [0.5, 0.5, 1],
  [1, 1, 1]
];

const mul3 = (a: number[][], b: number[][]): number[][] => {
  const out = Array.from({ length: 3 }, () => [0, 0, 0]);
  for (let r = 0; r < 3; r += 1) {
    for (let c = 0; c < 3; c += 1) {
      out[r][c] = a[r][0] * b[0][c] + a[r][1] * b[1][c] + a[r][2] * b[2][c];
    }
  }
  return out;
};

const inv3 = (m: number[][]): number[][] => {
  const [[a, b, c], [d, e, f], [g, h, i]] = m;

  const A = e * i - f * h;
  const B = -(d * i - f * g);
  const C = d * h - e * g;
  const D = -(b * i - c * h);
  const E = a * i - c * g;
  const F = -(a * h - b * g);
  const G = b * f - c * e;
  const H = -(a * f - c * d);
  const I = a * e - b * d;

  const det = a * A + b * B + c * C;
  if (Math.abs(det) < 1e-12) {
    throw new Error('Non-invertible matrix');
  }

  const invDet = 1 / det;
  return [
    [A * invDet, D * invDet, G * invDet],
    [B * invDet, E * invDet, H * invDet],
    [C * invDet, F * invDet, I * invDet]
  ];
};

export const toRgba = (color: FigmaColor, opacity: number = 1): string => {
  const alpha = color.a !== undefined ? color.a * opacity : opacity;
  return `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)}, ${Math.max(0, Math.min(1, alpha))})`;
};

export const cssMatrixFromFigmaTransform = (transform: FigmaMatrix): string => {
  const [[a, b, tx], [c, d, ty]] = transform;
  return `matrix(${a}, ${c}, ${b}, ${d}, ${tx}, ${ty})`;
};

export const imageFillToCss = (fill: ImageFill): Pick<CSSProperties, 'backgroundImage' | 'backgroundSize' | 'backgroundRepeat' | 'backgroundPosition'> => {
  const url = fill.assetRef || '';
  const sizeByScaleMode: Record<string, string> = {
    FILL: 'cover',
    FIT: 'contain',
    CROP: 'cover',
    TILE: 'auto'
  };

  return {
    backgroundImage: url ? `url("${url}")` : undefined,
    backgroundSize: sizeByScaleMode[fill.scaleMode || 'FILL'] || 'cover',
    backgroundRepeat: fill.scaleMode === 'TILE' ? 'repeat' : 'no-repeat',
    backgroundPosition: 'center'
  };
};

export const transformToGradientHandles = (t: FigmaMatrix): [{ x: number; y: number }, { x: number; y: number }, { x: number; y: number }] => {
  const T = [
    [t[0][0], t[0][1], t[0][2]],
    [t[1][0], t[1][1], t[1][2]],
    [0, 0, 1]
  ];
  const invT = inv3(T);
  const P = mul3(invT, O);
  return [
    { x: P[0][0], y: P[1][0] },
    { x: P[0][1], y: P[1][1] },
    { x: P[0][2], y: P[1][2] }
  ];
};

export const linearGradientFillToCss = (fill: LinearGradientFill): string | null => {
  const stops = (fill.gradientStops || []).slice().sort((a, b) => a.position - b.position);
  if (stops.length === 0) return null;

  let angle = 180;
  if (fill.gradientTransform) {
    try {
      const [h0, h1] = transformToGradientHandles(fill.gradientTransform);
      const dx = h1.x - h0.x;
      const dy = h1.y - h0.y;
      angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    } catch {
      angle = 180;
    }
  }

  const stopCss = stops
    .map((stop) => `${toRgba(stop.color, fill.opacity ?? 1)} ${Math.max(0, Math.min(100, stop.position * 100)).toFixed(2)}%`)
    .join(', ');

  return `linear-gradient(${angle.toFixed(2)}deg, ${stopCss})`;
};

const WEIGHT_BY_TOKEN: Record<string, number> = {
  thin: 100,
  extralight: 200,
  ultralight: 200,
  light: 300,
  regular: 400,
  normal: 400,
  medium: 500,
  semibold: 600,
  demibold: 600,
  bold: 700,
  extrabold: 800,
  ultrabold: 800,
  black: 900,
  heavy: 900
};

export const parseFontStyleToCss = (style: string | undefined): { weight: number; style: 'normal' | 'italic' } => {
  const normalized = (style || 'Regular').toLowerCase().replace(/\s+/g, '');
  const italic = normalized.includes('italic');
  let weight = 400;
  for (const [token, value] of Object.entries(WEIGHT_BY_TOKEN)) {
    if (normalized.includes(token)) {
      weight = value;
      break;
    }
  }
  return { weight, style: italic ? 'italic' : 'normal' };
};

export const toFontCacheKey = (family: string, style: string): string => `${family.trim().toLowerCase()}::${style.trim().toLowerCase()}`;

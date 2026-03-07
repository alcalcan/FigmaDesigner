'use client';

import { parseFontStyleToCss, toFontCacheKey } from './fidelityUtils';

const BRIDGE_BASE_URL = 'http://127.0.0.1:4000';

type FontResolveResponse = {
  status: 'ok';
  family: string;
  style: string;
  url: string;
  weight: number;
  fontStyle: 'normal' | 'italic';
};

const loadedFontKeys = new Set<string>();
const pendingFontLoads = new Map<string, Promise<void>>();

const visitNodeFonts = (value: unknown, fonts: Array<{ family: string; style: string }>): void => {
  if (!value || typeof value !== 'object') return;

  const node = value as Record<string, unknown>;
  const props = (node.props || {}) as Record<string, unknown>;

  const font = props.font as { family?: string; style?: string } | undefined;
  if (font?.family) {
    fonts.push({ family: font.family, style: font.style || 'Regular' });
  }

  const richTextSpans = props.richTextSpans;
  if (Array.isArray(richTextSpans)) {
    for (const span of richTextSpans) {
      if (!span || typeof span !== 'object') continue;
      const spanFont = (span as { font?: { family?: string; style?: string } }).font;
      if (spanFont?.family) {
        fonts.push({ family: spanFont.family, style: spanFont.style || 'Regular' });
      }
    }
  }

  const children = node.children;
  if (Array.isArray(children)) {
    children.forEach((child) => visitNodeFonts(child, fonts));
  }
};

const ensureSingleFont = async (family: string, style: string): Promise<void> => {
  const key = toFontCacheKey(family, style);
  if (loadedFontKeys.has(key)) return;

  const existing = pendingFontLoads.get(key);
  if (existing) {
    await existing;
    return;
  }

  const loader = (async () => {
    const params = new URLSearchParams({ family, style });
    const response = await fetch(`${BRIDGE_BASE_URL}/font/resolve?${params.toString()}`);
    if (!response.ok) {
      throw new Error(`Failed to resolve font ${family} ${style}`);
    }

    const payload = await response.json() as FontResolveResponse;
    const fallback = parseFontStyleToCss(style);

    const fontFace = new FontFace(payload.family, `url(${payload.url})`, {
      style: payload.fontStyle || fallback.style,
      weight: String(payload.weight || fallback.weight),
      display: 'swap'
    });

    await fontFace.load();
    document.fonts.add(fontFace);
    loadedFontKeys.add(key);
  })();

  pendingFontLoads.set(key, loader);
  try {
    await loader;
  } finally {
    pendingFontLoads.delete(key);
  }
};

export const ensureFontsForNode = async (nodeDefinition: unknown): Promise<void> => {
  const fonts: Array<{ family: string; style: string }> = [];
  visitNodeFonts(nodeDefinition, fonts);

  const unique = new Map<string, { family: string; style: string }>();
  for (const font of fonts) {
    const key = toFontCacheKey(font.family, font.style);
    unique.set(key, font);
  }

  for (const font of unique.values()) {
    try {
      await ensureSingleFont(font.family, font.style);
    } catch (error) {
      console.warn(`Font resolver failed for ${font.family} ${font.style}`, error);
    }
  }
};

export { parseFontStyleToCss, toFontCacheKey };

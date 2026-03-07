import * as fs from 'fs';
import * as http from 'http';
import * as path from 'path';
import { createHash } from 'crypto';

type FontStyleInfo = {
  weight: number;
  fontStyle: 'normal' | 'italic';
};

type FontCacheEntry = {
  key: string;
  family: string;
  style: string;
  weight: number;
  fontStyle: 'normal' | 'italic';
  fileName: string;
  createdAt: string;
};

type FontCacheIndex = Record<string, FontCacheEntry>;

const FONT_CACHE_DIR = path.join(process.cwd(), 'tools', 'bridge', 'cache', 'fonts');
const FONT_INDEX_PATH = path.join(FONT_CACHE_DIR, 'index.json');

const WEIGHT_MAP: Record<string, number> = {
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

const ensureCacheDir = (): void => {
  if (!fs.existsSync(FONT_CACHE_DIR)) {
    fs.mkdirSync(FONT_CACHE_DIR, { recursive: true });
  }
};

const loadIndex = (): FontCacheIndex => {
  ensureCacheDir();
  if (!fs.existsSync(FONT_INDEX_PATH)) {
    return {};
  }

  try {
    const content = fs.readFileSync(FONT_INDEX_PATH, 'utf8');
    return JSON.parse(content) as FontCacheIndex;
  } catch {
    return {};
  }
};

const saveIndex = (index: FontCacheIndex): void => {
  ensureCacheDir();
  fs.writeFileSync(FONT_INDEX_PATH, JSON.stringify(index, null, 2));
};

const normalizeFamily = (family: string): string => family.trim().replace(/\s+/g, ' ');

const parseStyle = (style: string): FontStyleInfo => {
  const normalized = (style || 'Regular').trim().toLowerCase().replace(/\s+/g, '');
  const italic = normalized.includes('italic');
  let weight = 400;

  for (const [token, mappedWeight] of Object.entries(WEIGHT_MAP)) {
    if (normalized.includes(token)) {
      weight = mappedWeight;
      break;
    }
  }

  return {
    weight,
    fontStyle: italic ? 'italic' : 'normal'
  };
};

const buildKey = (family: string, style: string): string => {
  return `${family.trim().toLowerCase()}::${style.trim().toLowerCase()}`;
};

const buildCssRequestUrl = (family: string, styleInfo: FontStyleInfo): string => {
  const familyParam = family.trim().replace(/\s+/g, '+');
  const italic = styleInfo.fontStyle === 'italic' ? 1 : 0;
  return `https://fonts.googleapis.com/css2?family=${familyParam}:ital,wght@${italic},${styleInfo.weight}&display=swap`;
};

const extractWoff2Url = (cssText: string): string | null => {
  const woff2Matches = [...cssText.matchAll(/url\(([^)]+)\)\s*format\(['"]woff2['"]\)/g)];
  if (woff2Matches.length > 0) {
    return woff2Matches[0][1].replace(/['"]/g, '');
  }

  const genericMatches = [...cssText.matchAll(/url\(([^)]+)\)/g)];
  if (genericMatches.length > 0) {
    return genericMatches[0][1].replace(/['"]/g, '');
  }

  return null;
};

const fetchAndCacheFont = async (family: string, style: string): Promise<FontCacheEntry> => {
  const normalizedFamily = normalizeFamily(family);
  const key = buildKey(normalizedFamily, style || 'Regular');
  const styleInfo = parseStyle(style || 'Regular');

  const index = loadIndex();
  const cached = index[key];
  if (cached) {
    const fontPath = path.join(FONT_CACHE_DIR, cached.fileName);
    if (fs.existsSync(fontPath)) {
      return cached;
    }
  }

  const cssUrl = buildCssRequestUrl(normalizedFamily, styleInfo);
  const cssResponse = await fetch(cssUrl, {
    headers: {
      // Google Fonts returns CSS only for browser-like UAs.
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    }
  });

  if (!cssResponse.ok) {
    throw new Error(`Failed to fetch font CSS (${cssResponse.status}) for ${normalizedFamily}`);
  }

  const cssText = await cssResponse.text();
  const woff2Url = extractWoff2Url(cssText);
  if (!woff2Url) {
    throw new Error(`Unable to locate a downloadable font URL for ${normalizedFamily} ${style}`);
  }

  const fontResponse = await fetch(woff2Url);
  if (!fontResponse.ok) {
    throw new Error(`Failed to download font binary (${fontResponse.status}) for ${normalizedFamily}`);
  }

  const buffer = Buffer.from(await fontResponse.arrayBuffer());
  const hash = createHash('sha1').update(buffer).digest('hex');
  const fileName = `${hash}.woff2`;
  const targetPath = path.join(FONT_CACHE_DIR, fileName);

  ensureCacheDir();
  if (!fs.existsSync(targetPath)) {
    fs.writeFileSync(targetPath, buffer);
  }

  const entry: FontCacheEntry = {
    key,
    family: normalizedFamily,
    style: style || 'Regular',
    weight: styleInfo.weight,
    fontStyle: styleInfo.fontStyle,
    fileName,
    createdAt: new Date().toISOString()
  };

  index[key] = entry;
  saveIndex(index);

  return entry;
};

export async function handleResolveFont(req: http.IncomingMessage, res: http.ServerResponse) {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host || '127.0.0.1:4000'}`);
    const family = url.searchParams.get('family') || '';
    const style = url.searchParams.get('style') || 'Regular';

    if (!family.trim()) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing required query param: family' }));
      return;
    }

    const entry = await fetchAndCacheFont(family, style);
    const responsePayload = {
      status: 'ok',
      family: entry.family,
      style: entry.style,
      weight: entry.weight,
      fontStyle: entry.fontStyle,
      url: `http://127.0.0.1:4000/font/file?key=${encodeURIComponent(entry.key)}`
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responsePayload));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('[Bridge] Font resolve failed:', message);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: message }));
  }
}

export function handleFontFile(req: http.IncomingMessage, res: http.ServerResponse) {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host || '127.0.0.1:4000'}`);
    const key = url.searchParams.get('key') || '';

    if (!key) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing required query param: key' }));
      return;
    }

    const index = loadIndex();
    const entry = index[key];
    if (!entry) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Font cache entry not found' }));
      return;
    }

    const targetPath = path.join(FONT_CACHE_DIR, entry.fileName);
    if (!fs.existsSync(targetPath)) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Font file not found on disk' }));
      return;
    }

    const stream = fs.createReadStream(targetPath);
    res.writeHead(200, {
      'Content-Type': 'font/woff2',
      'Cache-Control': 'public, max-age=31536000, immutable'
    });
    stream.pipe(res);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('[Bridge] Font file read failed:', message);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: message }));
  }
}

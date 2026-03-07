import * as fs from 'fs';
import * as http from 'http';
import * as path from 'path';
import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

type ParityResult = {
  status: 'ok';
  filePath: string;
  mode: string;
  thresholdPercent: number;
  mismatchPercent: number;
  mismatchPixels: number;
  totalPixels: number;
  passed: boolean;
  baselinePath: string;
  actualPath: string;
  diffPath: string;
  createdAt: string;
};

const PARITY_DIR = path.join(process.cwd(), 'tools', 'parity');
const PARITY_LATEST_PATH = path.join(PARITY_DIR, 'latest.json');

let latestByPath: Record<string, ParityResult> = {};
let latestGlobal: ParityResult | null = null;

const normalizePath = (value: string): string => value.replace(/\\/g, '/').replace(/^\/+/, '');

const ensureParityDir = (): void => {
  if (!fs.existsSync(PARITY_DIR)) {
    fs.mkdirSync(PARITY_DIR, { recursive: true });
  }
};

const writeLatest = (): void => {
  ensureParityDir();
  fs.writeFileSync(PARITY_LATEST_PATH, JSON.stringify({ latestGlobal, latestByPath }, null, 2));
};

const readLatest = (): void => {
  if (latestGlobal || Object.keys(latestByPath).length > 0) return;
  if (!fs.existsSync(PARITY_LATEST_PATH)) return;
  try {
    const raw = fs.readFileSync(PARITY_LATEST_PATH, 'utf8');
    const parsed = JSON.parse(raw) as { latestGlobal?: ParityResult | null; latestByPath?: Record<string, ParityResult> };
    latestGlobal = parsed.latestGlobal || null;
    latestByPath = parsed.latestByPath || {};
  } catch {
    latestGlobal = null;
    latestByPath = {};
  }
};

const findLatestPngRecursive = (dirPath: string): { filePath: string; mtimeMs: number } | null => {
  if (!fs.existsSync(dirPath)) return null;

  let latest: { filePath: string; mtimeMs: number } | null = null;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      const nested = findLatestPngRecursive(fullPath);
      if (nested && (!latest || nested.mtimeMs > latest.mtimeMs)) {
        latest = nested;
      }
      continue;
    }

    if (!entry.isFile()) continue;
    if (!entry.name.toLowerCase().endsWith('.png')) continue;

    const stat = fs.statSync(fullPath);
    if (!latest || stat.mtimeMs > latest.mtimeMs) {
      latest = { filePath: fullPath, mtimeMs: stat.mtimeMs };
    }
  }

  return latest;
};

const sanitizeForDir = (value: string): string => value.replace(/[^a-z0-9._-]/gi, '_');

const runParityScript = async (params: {
  previewUrl: string;
  baselinePath: string;
  actualPath: string;
  diffPath: string;
  thresholdPercent: number;
}): Promise<{
  thresholdPercent: number;
  mismatchPercent: number;
  mismatchPixels: number;
  totalPixels: number;
  passed: boolean;
  baselinePath: string;
  actualPath: string;
  diffPath: string;
}> => {
  const scriptPath = path.join(process.cwd(), 'web', 'tools', 'runParityCompare.mjs');
  const args = [
    scriptPath,
    '--url', params.previewUrl,
    '--baseline', params.baselinePath,
    '--actual', params.actualPath,
    '--diff', params.diffPath,
    '--threshold', String(params.thresholdPercent)
  ];

  const { stdout, stderr } = await execFileAsync(process.execPath, args, {
    cwd: process.cwd(),
    maxBuffer: 1024 * 1024 * 10
  });

  if (stderr && stderr.trim().length > 0) {
    console.warn('[Bridge] parity runner stderr:', stderr);
  }

  const parsed = JSON.parse(stdout.trim()) as {
    status: string;
    thresholdPercent: number;
    mismatchPercent: number;
    mismatchPixels: number;
    totalPixels: number;
    passed: boolean;
    baselinePath: string;
    actualPath: string;
    diffPath: string;
  };

  if (parsed.status !== 'ok') {
    throw new Error('Parity script returned non-ok status');
  }

  return {
    thresholdPercent: parsed.thresholdPercent,
    mismatchPercent: parsed.mismatchPercent,
    mismatchPixels: parsed.mismatchPixels,
    totalPixels: parsed.totalPixels,
    passed: parsed.passed,
    baselinePath: parsed.baselinePath,
    actualPath: parsed.actualPath,
    diffPath: parsed.diffPath
  };
};

export function handleParityLatest(req: http.IncomingMessage, res: http.ServerResponse) {
  readLatest();
  const url = new URL(req.url || '/', `http://${req.headers.host || '127.0.0.1:4000'}`);
  const pathParam = normalizePath(url.searchParams.get('path') || '');

  const payload = pathParam ? latestByPath[pathParam] || null : latestGlobal;

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', result: payload }));
}

export async function handleParityCompare(req: http.IncomingMessage, res: http.ServerResponse) {
  let body = '';
  req.on('data', (chunk) => { body += chunk.toString(); });
  req.on('end', async () => {
    try {
      const parsed = JSON.parse(body || '{}') as {
        filePath?: string;
        mode?: string;
        thresholdPercent?: number;
        baselinePath?: string;
        webBaseUrl?: string;
      };

      const filePath = normalizePath(parsed.filePath || '');
      const mode = (parsed.mode || 'fidelity').toLowerCase();
      const thresholdPercent = typeof parsed.thresholdPercent === 'number' ? parsed.thresholdPercent : 0.1;
      const webBaseUrl = (parsed.webBaseUrl || 'http://127.0.0.1:3000').replace(/\/+$/, '');

      if (!filePath) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing required field: filePath' }));
        return;
      }

      let baselinePath = parsed.baselinePath || '';
      if (!baselinePath) {
        const latestCapture = findLatestPngRecursive(path.join(process.cwd(), 'captures'));
        if (!latestCapture) {
          throw new Error('No baseline PNG found in captures/. Run capture-png first.');
        }
        baselinePath = latestCapture.filePath;
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const runFolder = path.join(PARITY_DIR, sanitizeForDir(filePath), timestamp);
      fs.mkdirSync(runFolder, { recursive: true });

      const actualPath = path.join(runFolder, 'actual.png');
      const diffPath = path.join(runFolder, 'diff.png');

      const previewUrl = `${webBaseUrl}/preview?path=${encodeURIComponent(filePath)}&mode=${encodeURIComponent(mode)}`;

      const compareResult = await runParityScript({
        previewUrl,
        baselinePath,
        actualPath,
        diffPath,
        thresholdPercent
      });

      const result: ParityResult = {
        status: 'ok',
        filePath,
        mode,
        thresholdPercent,
        mismatchPercent: compareResult.mismatchPercent,
        mismatchPixels: compareResult.mismatchPixels,
        totalPixels: compareResult.totalPixels,
        passed: compareResult.passed,
        baselinePath: compareResult.baselinePath,
        actualPath: compareResult.actualPath,
        diffPath: compareResult.diffPath,
        createdAt: new Date().toISOString()
      };

      latestByPath[filePath] = result;
      latestGlobal = result;
      writeLatest();

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error('[Bridge] parity compare failed:', message);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: message }));
    }
  });
}

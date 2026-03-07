'use client';

import React from 'react';
import * as LucideReact from 'lucide-react';
import type { ComponentType } from 'react';

let babelTransform: ((code: string, options: Record<string, unknown>) => { code: string }) | null = null;
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  babelTransform = require('@babel/standalone').transform;
}

export type PreviewRuntimeResult = {
  nodeDefinition: Record<string, unknown>;
};

type RuntimeModule = {
  exports: Record<string, unknown>;
};

const BRIDGE_BASE_URL = 'http://127.0.0.1:4000';

const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx'];
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp', '.svg'];

const moduleCache = new Map<string, RuntimeModule>();
const assetCache = new Map<string, string>();

const isRelativeImport = (request: string): boolean => request.startsWith('./') || request.startsWith('../');

const normalizePath = (value: string): string => value.replace(/\\/g, '/').replace(/^\/+/, '');

const dirname = (filePath: string): string => {
  const normalized = normalizePath(filePath);
  const index = normalized.lastIndexOf('/');
  if (index < 0) return '';
  return normalized.slice(0, index);
};

const joinPath = (base: string, request: string): string => {
  const parts = [...base.split('/').filter(Boolean)];
  for (const segment of request.split('/')) {
    if (!segment || segment === '.') continue;
    if (segment === '..') {
      parts.pop();
      continue;
    }
    parts.push(segment);
  }
  return parts.join('/');
};

const hasKnownExtension = (value: string): boolean => {
  const lower = value.toLowerCase();
  return [...EXTENSIONS, ...IMAGE_EXTENSIONS].some((ext) => lower.endsWith(ext));
};

const mimeTypeForPath = (value: string): string => {
  const lower = value.toLowerCase();
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.gif')) return 'image/gif';
  if (lower.endsWith('.bmp')) return 'image/bmp';
  if (lower.endsWith('.svg')) return 'image/svg+xml';
  return 'application/octet-stream';
};

const fetchSource = async (filePath: string): Promise<string> => {
  const response = await fetch(`${BRIDGE_BASE_URL}/read?path=${encodeURIComponent(filePath)}`);
  if (!response.ok) {
    throw new Error(`Failed to read source: ${filePath}`);
  }
  return response.text();
};

const fetchAsset = async (filePath: string): Promise<string> => {
  const normalized = normalizePath(filePath);
  const cached = assetCache.get(normalized);
  if (cached) return cached;

  if (normalized.toLowerCase().endsWith('.svg')) {
    const svgText = await fetchSource(normalized);
    assetCache.set(normalized, svgText);
    return svgText;
  }

  const response = await fetch(`${BRIDGE_BASE_URL}/read-asset?path=${encodeURIComponent(normalized)}`);
  if (!response.ok) {
    throw new Error(`Failed to read asset: ${normalized}`);
  }

  const payload = await response.json() as { content?: string };
  if (!payload.content) {
    throw new Error(`Asset response missing content: ${normalized}`);
  }

  const mime = mimeTypeForPath(normalized);
  const dataUrl = `data:${mime};base64,${payload.content}`;
  assetCache.set(normalized, dataUrl);
  return dataUrl;
};

const resolveModulePath = async (request: string, parentPath: string): Promise<string> => {
  const parentDir = dirname(parentPath);
  const basePath = normalizePath(joinPath(parentDir, request));

  if (hasKnownExtension(basePath)) {
    return basePath;
  }

  for (const ext of EXTENSIONS) {
    const candidate = `${basePath}${ext}`;
    try {
      await fetchSource(candidate);
      return candidate;
    } catch {
      // try next
    }
  }

  for (const ext of EXTENSIONS) {
    const candidate = `${basePath}/index${ext}`;
    try {
      await fetchSource(candidate);
      return candidate;
    } catch {
      // try next
    }
  }

  throw new Error(`Unable to resolve module "${request}" from ${parentPath}`);
};

const isAssetPath = (value: string): boolean => {
  const lower = value.toLowerCase();
  return IMAGE_EXTENSIONS.some((ext) => lower.endsWith(ext));
};

class BaseComponentMock {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async renderDefinition(def: any): Promise<any> {
    if (!def) return def;

    const resolved = { ...def };

    if (resolved.type === 'COMPONENT' && resolved.component) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const instance = new resolved.component();
        if (instance && typeof instance.create === 'function') {
          const expanded = await instance.create({
            ...(resolved.props || {}),
            ...(resolved.layoutProps || {})
          });
          return this.renderDefinition(expanded);
        }
      } catch (error) {
        console.warn('Preview runtime: nested component expansion failed', error);
      }
    }

    if (Array.isArray(resolved.children)) {
      resolved.children = await Promise.all(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolved.children.map((child: any) => this.renderDefinition(child))
      );
    }

    return resolved;
  }
}

const executeModule = async (resolvedPath: string): Promise<RuntimeModule> => {
  const cached = moduleCache.get(resolvedPath);
  if (cached) return cached;

  const source = await fetchSource(resolvedPath);
  if (!babelTransform) {
    throw new Error('Babel transform is unavailable in this environment.');
  }

  const transformed = babelTransform(source, {
    presets: ['react', 'typescript', ['env', { modules: 'commonjs' }]],
    filename: resolvedPath
  });
  const asyncCommonJsCode = transformed.code.replace(/(^|[^\w$])require\s*\(/g, '$1await __asyncRequire(');

  const moduleObj: RuntimeModule = { exports: {} };
  moduleCache.set(resolvedPath, moduleObj);

  const localRequire = async (request: string): Promise<unknown> => {
    if (request === 'react') return { ...React, default: React };
    if (request.includes('lucide') || request.endsWith('/index') || request.endsWith('index')) return LucideReact;
    if (request.includes('BaseComponent')) return { BaseComponent: BaseComponentMock };

    if (isRelativeImport(request)) {
      const nextPath = await resolveModulePath(request, resolvedPath);
      if (isAssetPath(nextPath)) {
        return fetchAsset(nextPath);
      }
      const moduleValue = await executeModule(nextPath);
      return moduleValue.exports;
    }

    if (isAssetPath(request)) {
      const nextPath = await resolveModulePath(request, resolvedPath);
      return fetchAsset(nextPath);
    }

    console.warn(`Preview runtime: unresolved external module "${request}"`);
    return {};
  };

  // Execute transpiled module with async-aware require wrapper.
  const wrappedCode = `
    return (async () => {
      const __asyncRequire = async (id) => await require(id);
      ${asyncCommonJsCode}
      return module.exports;
    })();
  `;

  // eslint-disable-next-line no-new-func
  const executor = new Function('require', 'exports', 'module', wrappedCode) as (
    requireFn: (request: string) => Promise<unknown>,
    exportsObj: Record<string, unknown>,
    moduleArg: { exports: Record<string, unknown> }
  ) => Promise<Record<string, unknown>>;

  const finalExports = await executor(localRequire, moduleObj.exports, { exports: moduleObj.exports });
  moduleObj.exports = finalExports;

  return moduleObj;
};

const findComponentClass = (moduleExports: Record<string, unknown>): ComponentType | null => {
  const keys = Object.keys(moduleExports);
  for (const key of keys) {
    const value = moduleExports[key];
    if (typeof value === 'function') {
      return value as ComponentType;
    }
  }
  return null;
};

export const clearPreviewRuntimeCache = (): void => {
  moduleCache.clear();
  assetCache.clear();
};

export const loadComponentNodeDefinition = async (filePath: string): Promise<PreviewRuntimeResult> => {
  const normalized = normalizePath(filePath);
  if (!normalized) {
    throw new Error('No file path selected for preview.');
  }

  const entryModule = await executeModule(normalized);
  const ComponentClass = findComponentClass(entryModule.exports);
  if (!ComponentClass) {
    throw new Error(`No exported component class found in ${normalized}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instance: any = new (ComponentClass as any)();
  if (!instance || typeof instance.create !== 'function') {
    throw new Error(`Exported class in ${normalized} does not implement async create(props).`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nodeDefinition = await instance.create({});
  if (!nodeDefinition || typeof nodeDefinition !== 'object') {
    throw new Error(`create() in ${normalized} did not return a NodeDefinition object.`);
  }

  return { nodeDefinition: nodeDefinition as Record<string, unknown> };
};

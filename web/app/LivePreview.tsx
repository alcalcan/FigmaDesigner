'use client';

import React, { useEffect, useState } from 'react';
import * as LucideReact from 'lucide-react';
import { FigmaNodeRenderer } from './FigmaPreviewRenderer';

// Include Babel standalone only on the client side
let transform: any = null;
if (typeof window !== 'undefined') {
    transform = require('@babel/standalone').transform;
}

interface LivePreviewProps {
    filePath: string;
}

class BaseComponentMock {
    async renderDefinition(def: any): Promise<any> {
        if (!def) return def;

        // Clone to avoid mutating original def
        const resolvedDef = { ...def };

        if (resolvedDef.type === 'COMPONENT' && resolvedDef.component) {
            try {
                const instance = new resolvedDef.component();
                if (instance.create) {
                    const expanded = await instance.create({
                        ...(resolvedDef.props || {}),
                        ...(resolvedDef.layoutProps || {})
                    });
                    // Recursively resolve nested components inside the expanded result
                    return await this.renderDefinition(expanded);
                }
            } catch (err) {
                console.warn('LivePreview: Failed to expand nested COMPONENT', err);
            }
        }

        // Recursively walk children
        if (resolvedDef.children && Array.isArray(resolvedDef.children)) {
            resolvedDef.children = await Promise.all(
                resolvedDef.children.map((child: any) => this.renderDefinition(child))
            );
        }

        return resolvedDef;
    }
}

export function LivePreview({ filePath }: LivePreviewProps) {
    const [ComponentNodeDef, setComponentNodeDef] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchAndRender() {
            try {
                setComponentNodeDef(null);
                setError(null);

                // 1. Fetch code
                const res = await fetch(`http://127.0.0.1:4000/read?path=${encodeURIComponent(filePath)}`);

                if (!res.ok) {
                    throw new Error(await res.text() || 'Failed to fetch component code');
                }

                let code = await res.text();

                // 1.5 Scan for svg imports and fetch them
                const svgImports = new Map<string, string>(); // moduleName -> svgContent
                const importRegex = /import\s+(.*?)\s+from\s+['"](.*\.svg)['"]/g;
                let match;
                while ((match = importRegex.exec(code)) !== null) {
                    const importPath = match[2];

                    let absoluteImportPath = '';
                    if (importPath.startsWith('.')) {
                        const dirParts = filePath.split('/');
                        dirParts.pop(); // remove filename
                        const importParts = importPath.split('/');
                        for (const part of importParts) {
                            if (part === '.') continue;
                            if (part === '..') dirParts.pop();
                            else dirParts.push(part);
                        }
                        absoluteImportPath = dirParts.join('/');
                    } else {
                        absoluteImportPath = importPath;
                    }

                    try {
                        const svgRes = await fetch(`http://127.0.0.1:4000/read?path=${encodeURIComponent(absoluteImportPath)}`);
                        if (svgRes.ok) {
                            const svgText = await svgRes.text();
                            svgImports.set(importPath, svgText);
                        }
                    } catch (e) {
                        console.error("Failed to fetch SVG", absoluteImportPath, e);
                    }
                }

                // 2. Transpile using Babel
                if (!transform) throw new Error('Babel is not loaded.');

                const transformed = transform(code, {
                    presets: ['react', 'typescript', ['env', { modules: 'commonjs' }]],
                    filename: 'component.tsx',
                });

                const transpiledCode = transformed.code;

                // 3. Mock environment requirements
                const exports: Record<string, any> = {};
                const requireFn = (moduleName: string) => {
                    if (svgImports.has(moduleName)) {
                        return svgImports.get(moduleName);
                    }
                    if (moduleName === 'react') return { ...React, default: React };
                    if (moduleName.includes('lucide') || moduleName.endsWith('index')) return LucideReact;
                    if (moduleName.includes('BaseComponent')) {
                        return { BaseComponent: BaseComponentMock };
                    }
                    console.warn(`LivePreview: Unresolved module import "${moduleName}"`);
                    return {};
                };

                // 4. Create execution function
                const executeFn = new Function('require', 'exports', transpiledCode);

                // 5. Run the code to populate "exports"
                executeFn(requireFn, exports);

                // Find the exported class (components are usually the only exported class)
                const exportKeys = Object.keys(exports);
                const ComponentClass = exports[exportKeys[0]] || Object.values(exports).find(x => typeof x === 'function');

                if (!ComponentClass) {
                    throw new Error('No valid class exported from this file');
                }

                // Instantiate and construct node definition
                const instance = new ComponentClass();
                if (instance.create) {
                    const def = await instance.create({});
                    if (isMounted) setComponentNodeDef(def);
                } else {
                    throw new Error('Exported class must have an async create() method');
                }

            } catch (err: any) {
                console.error('LivePreview compilation error:', err);
                if (isMounted) setError(err.message || String(err));
            }
        }

        fetchAndRender();

        return () => { isMounted = false; };
    }, [filePath]);

    if (error) {
        return (
            <div style={{ padding: '16px', color: '#ff4d4f' }}>
                <h3 style={{ marginTop: 0 }}>Preview Error</h3>
                <pre style={{ whiteSpace: 'pre-wrap', fontSize: '13px', background: '#f5f5f5', padding: '12px', borderRadius: '4px', border: '1px solid #d9d9d9', overflowX: 'auto' }}>
                    {error}
                </pre>
            </div>
        );
    }

    if (!ComponentNodeDef) {
        return <div style={{ padding: '20px', color: '#888' }}>Compiling {filePath}...</div>;
    }

    return (
        <div style={{ padding: 20, minHeight: '100%', background: '#eaeaea', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Visual Canvas matching the Right Column styles */}
            <div style={{ width: 1440, height: 1024, zoom: 0.6, background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', display: 'flex', pointerEvents: 'none' }}>
                <FigmaNodeRenderer node={ComponentNodeDef} />
            </div>
        </div>
    );
}

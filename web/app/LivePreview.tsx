'use client';

import React, { useEffect, useState } from 'react';
import * as LucideReact from 'lucide-react';
import { FigmaNodeRenderer } from './FigmaPreviewRenderer';

interface LivePreviewProps {
    filePath: string;
}

import { clearPreviewRuntimeCache, loadComponentNodeDefinition } from './previewRuntime';

export function LivePreview({ filePath }: LivePreviewProps) {
    const [ComponentNodeDef, setComponentNodeDef] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchAndRender() {
            try {
                setComponentNodeDef(null);
                setError(null);

                if (!filePath) return;

                clearPreviewRuntimeCache();
                const result = await loadComponentNodeDefinition(filePath);

                if (isMounted) {
                    setComponentNodeDef(result.nodeDefinition);
                }
            } catch (err: any) {
                console.error('LivePreview runtime error:', err);
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

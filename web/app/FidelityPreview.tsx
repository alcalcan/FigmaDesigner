'use client';

import React, { useEffect, useMemo, useState } from 'react';

import { ensureFontsForNode } from './fontResolver';
import { FigmaFidelityRenderer } from './FigmaFidelityRenderer';
import { collectUnsupportedFidelitySemantics } from './fidelitySupport';
import { clearPreviewRuntimeCache, loadComponentNodeDefinition } from './previewRuntime';

interface FidelityPreviewProps {
  filePath: string;
  standalone?: boolean;
}

export function FidelityPreview({ filePath, standalone = false }: FidelityPreviewProps) {
  const [nodeDefinition, setNodeDefinition] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  const normalizedPath = useMemo(() => (filePath || '').trim(), [filePath]);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      if (!normalizedPath) {
        setNodeDefinition(null);
        setError('Select a component/page/slide/flow to preview in Fidelity mode.');
        setReady(false);
        return;
      }

      try {
        setNodeDefinition(null);
        setError(null);
        setReady(false);

        clearPreviewRuntimeCache();
        const result = await loadComponentNodeDefinition(normalizedPath);
        const unsupportedIssues = collectUnsupportedFidelitySemantics(result.nodeDefinition);
        if (unsupportedIssues.length > 0) {
          const details = unsupportedIssues.slice(0, 8);
          const suffix = unsupportedIssues.length > details.length
            ? `\n- ...and ${unsupportedIssues.length - details.length} more`
            : '';
          throw new Error(`Unsupported fidelity semantics detected:\n- ${details.join('\n- ')}${suffix}`);
        }

        await ensureFontsForNode(result.nodeDefinition);

        if (cancelled) return;
        setNodeDefinition(result.nodeDefinition);
        setReady(true);
      } catch (runtimeError) {
        if (cancelled) return;
        const message = runtimeError instanceof Error ? runtimeError.message : String(runtimeError);
        setError(message);
        setReady(false);
      }
    };

    void load();

    return () => {
      cancelled = true;
    };
  }, [normalizedPath]);

  if (error) {
    return (
      <div
        data-preview-ready="false"
        data-preview-error="true"
        style={{
          color: '#ffb4b4',
          background: 'rgba(80, 12, 12, 0.35)',
          border: '1px solid rgba(255, 100, 100, 0.4)',
          borderRadius: 8,
          padding: 14,
          maxWidth: 'min(100%, 900px)'
        }}
      >
        <strong style={{ display: 'block', marginBottom: 6 }}>Fidelity Preview Error</strong>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontSize: 12 }}>{error}</pre>
      </div>
    );
  }

  if (!nodeDefinition) {
    return (
      <div data-preview-ready="false" style={{ color: '#9da3ad', fontSize: 12 }}>
        Compiling fidelity preview for {normalizedPath || 'selected item'}...
      </div>
    );
  }

  return (
    <div
      data-fidelity-stage="true"
      data-preview-ready={ready ? 'true' : 'false'}
      style={{
        width: '100%',
        height: standalone ? '100vh' : '100%',
        minHeight: standalone ? '100vh' : undefined,
        background: '#050506',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto',
        padding: standalone ? 32 : 16
      }}
    >
      <div
        data-fidelity-node-root="true"
        style={{
          display: 'inline-block',
          pointerEvents: 'none'
        }}
      >
        <FigmaFidelityRenderer node={nodeDefinition} />
      </div>
    </div>
  );
}

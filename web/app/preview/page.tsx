'use client';

import { useSearchParams } from 'next/navigation';

import { FidelityPreview } from '../FidelityPreview';
import { LivePreview } from '../LivePreview';

export default function PreviewRoutePage() {
  const searchParams = useSearchParams();
  const filePath = searchParams.get('path') || '';
  const mode = (searchParams.get('mode') || 'fidelity').toLowerCase();

  if (!filePath) {
    return (
      <main style={{ minHeight: '100vh', background: '#050506', color: '#9da3ad', display: 'grid', placeItems: 'center' }}>
        Missing &quot;path&quot; query parameter.
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', background: '#050506' }}>
      {mode === 'standard' ? <LivePreview filePath={filePath} /> : <FidelityPreview filePath={filePath} standalone />}
    </main>
  );
}
